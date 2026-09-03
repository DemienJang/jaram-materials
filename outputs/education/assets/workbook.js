(() => {
  const pageKey = document.body.dataset.concept || "material";
  const fields = document.querySelectorAll("textarea[data-save], input[data-save]");

  fields.forEach((field) => {
    const key = `jaesik-workbook:${pageKey}:${field.id}`;
    const saved = window.localStorage.getItem(key);

    if (saved !== null) {
      if (field instanceof HTMLInputElement && field.type === "checkbox") {
        field.checked = saved === "true";
      } else {
        field.value = saved;
      }
    }

    const saveField = () => {
      const value =
        field instanceof HTMLInputElement && field.type === "checkbox"
          ? String(field.checked)
          : field.value;
      window.localStorage.setItem(key, value);
      document.querySelectorAll("[data-save-status]").forEach((status) => {
        status.textContent = "기록됨";
        window.setTimeout(() => {
          status.textContent = "이 기기에 자동 저장";
        }, 1200);
      });
      updateProgress();
      updateRecordPreview();
    };

    field.addEventListener("input", saveField);
    field.addEventListener("change", saveField);
  });

  document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  document.querySelectorAll("[data-clear]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!window.confirm("이 페이지에 작성한 기록을 모두 지울까요?")) return;
      fields.forEach((field) => {
        window.localStorage.removeItem(`jaesik-workbook:${pageKey}:${field.id}`);
        if (field instanceof HTMLInputElement && field.type === "checkbox") {
          field.checked = false;
        } else {
          field.value = "";
        }
      });
      updateProgress();
      updateRecordPreview();
    });
  });

  document.querySelectorAll("[data-record-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = buildRecordText();
      if (!text.trim()) return setRecordStatus("아직 가져갈 기록이 없습니다.");

      try {
        await window.navigator.clipboard.writeText(text);
        setRecordStatus("기록을 복사했습니다.");
      } catch (error) {
        setRecordStatus("복사가 어려운 환경입니다. 아래 기록을 직접 선택해 복사해 주세요.");
      }
    });
  });

  document.querySelectorAll("[data-record-share]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = buildRecordText();
      if (!text.trim()) return setRecordStatus("아직 공유할 기록이 없습니다.");
      if (!window.navigator.share) {
        setRecordStatus("이 브라우저는 바로 공유를 지원하지 않습니다. 카드 저장이나 본문 복사를 사용해 주세요.");
        return;
      }

      try {
        const file = await buildRecordImageFile();
        if (file && window.navigator.canShare?.({ files: [file] })) {
          await window.navigator.share({
            title: document.title,
            text: "워크북에서 작성한 나의 기록 이미지입니다.",
            files: [file],
          });
        } else {
          await window.navigator.share({
            title: document.title,
            text,
          });
        }
        setRecordStatus("공유 창을 열었습니다.");
      } catch (error) {
        if (error.name !== "AbortError") {
          setRecordStatus("공유가 완료되지 않았습니다. 카드 저장이나 본문 복사를 사용해 주세요.");
        }
      }
    });
  });

  document.querySelectorAll("[data-record-download]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = buildRecordText();
      if (!text.trim()) return setRecordStatus("아직 저장할 기록이 없습니다.");

      const blob = await buildRecordImageBlob();
      if (!blob) return setRecordStatus("이미지 저장을 만들 수 없습니다. 본문 복사를 사용해 주세요.");

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${pageKey}-record-card.png`;
      document.body.append(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(link.href);
      setRecordStatus("기록 이미지를 저장했습니다.");
    });
  });

  document.querySelectorAll("[data-record-print]").forEach((button) => {
    button.addEventListener("click", () => {
      const text = buildRecordText();
      if (!text.trim()) return setRecordStatus("아직 인쇄할 기록이 없습니다.");

      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        setRecordStatus("인쇄 창을 열 수 없습니다. 브라우저의 팝업 차단을 확인해 주세요.");
        return;
      }

      printWindow.document.write(buildRecordDocument({ print: true }));
      printWindow.document.close();
      setRecordStatus("기록만 인쇄 창으로 열었습니다.");
    });
  });

  function updateProgress() {
    const trackable = [...fields];
    const completed = trackable.filter((field) => {
      if (field instanceof HTMLInputElement && field.type === "checkbox") {
        return field.checked;
      }
      return field.value.trim().length > 0;
    }).length;
    const percent = trackable.length ? Math.round((completed / trackable.length) * 100) : 0;
    document.querySelectorAll("[data-progress]").forEach((progress) => {
      progress.style.setProperty("--progress", `${percent}%`);
      progress.setAttribute("aria-valuenow", String(percent));
    });
    document.querySelectorAll("[data-progress-text]").forEach((text) => {
      text.textContent = `${completed}/${trackable.length}`;
    });
  }

  function buildRecordText() {
    const record = buildRecordData();
    const entries = record.entries.map((entry) => {
      return entry.type === "check" ? `- ${entry.label}` : `## ${entry.label}\n${entry.value}`;
    });

    return entries.length ? [`# ${record.title}`, ...entries].join("\n\n") : "";
  }

  function buildRecordData() {
    const heading = document.querySelector("h1");
    const title = heading?.innerText.replace(/\s+/g, " ").trim() || document.title;
    const entries = [...fields].flatMap((field) => {
      const label = getFieldLabel(field);
      if (!label) return [];
      if (field instanceof HTMLInputElement && field.type === "checkbox") {
        return field.checked ? [{ type: "check", label }] : [];
      }
      const value = field.value.trim();
      return value ? [{ type: "text", label, value }] : [];
    });

    return { title, entries };
  }

  function getFieldLabel(field) {
    const label = (field.id ? document.querySelector(`label[for="${field.id}"]`) : null) || field.closest("label");
    if (!label) return field.getAttribute("aria-label") || "";
    const clone = label.cloneNode(true);
    clone.querySelectorAll("span").forEach((span) => span.remove());
    return clone.textContent.replace(/\s+/g, " ").trim();
  }

  function updateRecordPreview() {
    document.querySelectorAll("[data-record-output]").forEach((output) => {
      const record = buildRecordData();
      if (!record.entries.length) {
        output.innerHTML = `<p class="record-empty">아직 작성된 기록이 없습니다. 앞의 질문에 답하면 이곳에 자동으로 모입니다.</p>`;
        return;
      }
      output.innerHTML = buildRecordCard(record);
    });
  }

  function setRecordStatus(message) {
    document.querySelectorAll("[data-record-status]").forEach((status) => {
      status.textContent = message;
    });
  }

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      };
      return entities[character];
    });
  }

  async function buildRecordImageFile() {
    try {
      const blob = await buildRecordImageBlob();
      if (!blob) return null;
      return new File([blob], `${pageKey}-record-card.png`, {
        type: "image/png",
      });
    } catch (error) {
      return null;
    }
  }

  async function buildRecordImageBlob() {
    const record = buildRecordData();
    if (!record.entries.length) return null;

    const scale = 2;
    const width = 1200;
    const cardX = 124;
    const cardWidth = width - cardX * 2;
    const contentX = 176;
    const contentWidth = width - contentX * 2;
    const gap = 24;
    const columnWidth = (contentWidth - gap) / 2;
    const ctxProbe = document.createElement("canvas").getContext("2d");
    const checked = record.entries.filter((entry) => entry.type === "check");
    const written = record.entries.filter((entry) => entry.type !== "check");

    await document.fonts?.ready;
    ctxProbe.font = "800 43px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    const titleLines = wrapCanvasWords(ctxProbe, record.title, 470);
    const heroHeight = Math.max(360, 190 + titleLines.length * 58);
    const sectionY = 40 + heroHeight;
    const checkRows = checked.length ? Math.ceil(checked.length / 2) : 0;
    const entryHeights = written.map((entry) => {
      ctxProbe.font = "800 22px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
      const labelLines = wrapCanvasText(ctxProbe, entry.label, columnWidth - 112).length;
      ctxProbe.font = "400 25px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
      const valueLines = wrapCanvasText(ctxProbe, entry.value, columnWidth - 88).length;
      const labelHeight = Math.max(32, labelLines * 28);
      const answerHeight = Math.max(82, valueLines * 43 + 58);
      return 52 + labelHeight + 22 + answerHeight + 28;
    });
    const entryRows = [];
    for (let index = 0; index < entryHeights.length; index += 2) {
      entryRows.push(Math.max(entryHeights[index] || 0, entryHeights[index + 1] || 0));
    }

    const height =
      sectionY +
      128 +
      (checkRows ? checkRows * 118 + 34 : 0) +
      entryRows.reduce((sum, rowHeight) => sum + rowHeight + gap, 0) +
      140;

    const canvas = document.createElement("canvas");
    canvas.width = width * scale;
    canvas.height = height * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);

    ctx.fillStyle = "#eee9dc";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#f0d98c";
    ctx.fillRect(44, 0, 52, height);
    ctx.fillRect(width - 96, 0, 52, height);

    ctx.fillStyle = "#fffdf7";
    roundRect(ctx, cardX, 40, cardWidth, height - 80, 0);
    ctx.fill();

    ctx.fillStyle = "#dbe2cd";
    ctx.fillRect(cardX, 40, cardWidth, heroHeight);
    ctx.strokeStyle = "rgba(38,55,46,0.32)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(contentX, 92);
    ctx.lineTo(width - contentX, 92);
    ctx.stroke();

    ctx.fillStyle = "#26372e";
    ctx.font = "850 17px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    ctx.fillText("JARAM WORKBOOK RECORD", contentX, 75);
    ctx.textAlign = "right";
    ctx.fillText(new Date().toLocaleDateString("ko-KR"), width - contentX, 75);
    ctx.textAlign = "left";

    ctx.fillStyle = "#df6e50";
    ctx.font = "850 17px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    ctx.fillText("읽고 · 살피고 · 가져가기", contentX, 165);
    ctx.fillStyle = "#26372e";
    ctx.font = "800 43px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    titleLines.forEach((line, index) => ctx.fillText(line, contentX, 222 + index * 56));
    ctx.fillStyle = "#46564d";
    ctx.font = "400 23px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    wrapCanvasText(ctx, "앞에서 작성한 기록과 다짐을 한 장의 이미지 카드로 모았습니다.", 280).forEach((line, index) => {
      ctx.fillText(line, width - contentX - 270, 218 + index * 40);
    });

    let y = sectionY + 70;
    ctx.fillStyle = "#dde4d1";
    roundRect(ctx, cardX, sectionY, cardWidth, height - sectionY - 90, 0);
    ctx.fill();

    ctx.fillStyle = "#df6e50";
    ctx.font = "850 17px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    ctx.fillText("MY RECORDS", contentX, y);
    ctx.fillStyle = "#26372e";
    ctx.font = "800 43px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    ctx.fillText("내가 남긴 기록", contentX, y + 62);
    ctx.fillStyle = "#536157";
    ctx.font = "400 20px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    ctx.fillText("체크한 항목과 직접 쓴 문장만 모았습니다.", width - contentX - 360, y + 62);
    y += 120;

    if (checked.length) {
      checked.forEach((entry, index) => {
        const col = index % 2;
        const row = Math.floor(index / 2);
        const x = contentX + col * (columnWidth + gap);
        const boxY = y + row * 118;
        drawCheckCell(ctx, x, boxY, columnWidth, 118, `CHECK ${String(index + 1).padStart(2, "0")}`, entry.label);
      });
      y += checkRows * 118 + 34;
    }

    written.forEach((entry, index) => {
      const col = index % 2;
      if (col === 0 && index > 0) y += entryRows[Math.floor(index / 2) - 1] + gap;
      const rowHeight = entryRows[Math.floor(index / 2)];
      const x = contentX + col * (columnWidth + gap);
      drawEntryCard(ctx, x, y, columnWidth, rowHeight, String(index + 1).padStart(2, "0"), entry.label, entry.value);
    });

    ctx.fillStyle = "#26372e";
    ctx.fillRect(cardX, height - 90, cardWidth, 50);
    ctx.fillStyle = "#eff2e7";
    ctx.font = "850 15px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    ctx.fillText("이 기록은 사용자의 기기에서 만든 개인 보관용 카드입니다.", contentX, height - 59);

    return new Promise((resolve) => canvas.toBlob(resolve, "image/png", 0.96));
  }

  function wrapCanvasText(ctx, text, maxWidth) {
    const source = String(text).replace(/\r\n/g, "\n").split("\n");
    const lines = [];

    source.forEach((paragraph) => {
      let line = "";
      [...paragraph].forEach((character) => {
        const testLine = line + character;
        if (line && ctx.measureText(testLine).width > maxWidth) {
          lines.push(line);
          line = character;
        } else {
          line = testLine;
        }
      });
      if (line) lines.push(line);
    });

    return lines;
  }

  function wrapCanvasWords(ctx, text, maxWidth) {
    const words = String(text).replace(/\s+/g, " ").trim().split(" ");
    const lines = [];
    let line = "";

    words.forEach((word) => {
      const testLine = line ? `${line} ${word}` : word;
      if (line && ctx.measureText(testLine).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    });

    if (line) lines.push(line);
    return lines.flatMap((item) => {
      if (ctx.measureText(item).width <= maxWidth) return [item];
      return wrapCanvasText(ctx, item, maxWidth);
    });
  }

  function roundRect(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function drawCheckCell(ctx, x, y, width, height, label, value) {
    ctx.fillStyle = "rgba(255,253,247,0.68)";
    ctx.strokeStyle = "rgba(38,55,46,0.22)";
    ctx.lineWidth = 1.5;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);

    ctx.fillStyle = "#df6e50";
    ctx.font = "850 15px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    ctx.fillText(label, x + 28, y + 38);
    ctx.fillStyle = "#26372e";
    ctx.font = "800 23px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    wrapCanvasText(ctx, value, width - 56).slice(0, 2).forEach((line, index) => {
      ctx.fillText(line, x + 28, y + 76 + index * 30);
    });
  }

  function drawEntryCard(ctx, x, y, width, height, number, label, value) {
    ctx.fillStyle = "rgba(255,253,247,0.84)";
    roundRect(ctx, x, y, width, height, 16);
    ctx.fill();
    ctx.strokeStyle = "rgba(38,55,46,0.24)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "#df6e50";
    ctx.font = "850 17px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    ctx.fillText(number, x + 28, y + 43);
    ctx.fillStyle = "#26372e";
    ctx.font = "800 22px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    const labelLines = wrapCanvasText(ctx, label, width - 112);
    labelLines.forEach((line, index) => {
      ctx.fillText(line, x + 78, y + 43 + index * 28);
    });

    const answerX = x + 28;
    const answerY = y + 54 + Math.max(32, labelLines.length * 28);
    const answerWidth = width - 56;
    ctx.font = "400 25px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    const valueLines = wrapCanvasText(ctx, value, answerWidth - 32);
    const answerHeight = Math.max(82, valueLines.length * 43 + 58);
    ctx.fillStyle = "rgba(255,253,247,0.72)";
    roundRect(ctx, answerX, answerY, answerWidth, answerHeight, 8);
    ctx.fill();
    ctx.strokeStyle = "rgba(38,55,46,0.4)";
    ctx.setLineDash([6, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.strokeStyle = "rgba(38,55,46,0.11)";
    ctx.lineWidth = 1;
    for (let lineY = answerY + 43; lineY < answerY + answerHeight - 10; lineY += 43) {
      ctx.beginPath();
      ctx.moveTo(answerX + 16, lineY);
      ctx.lineTo(answerX + answerWidth - 16, lineY);
      ctx.stroke();
    }

    ctx.fillStyle = "#26372e";
    ctx.font = "400 25px Pretendard, Noto Sans KR, Malgun Gothic, sans-serif";
    valueLines.forEach((line, index) => {
      ctx.fillText(line, answerX + 16, answerY + 42 + index * 43);
    });
  }

  function buildRecordDocument(options = {}) {
    const record = buildRecordData();
    const printed = options.print ? `<script>window.addEventListener("load", () => window.print());<\/script>` : "";

    return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(record.title)} 기록 카드</title>
  <style>${recordCardStyles()}</style>
</head>
<body>
  ${buildRecordCard(record)}
  ${printed}
</body>
</html>`;
  }

  function buildRecordCard(record) {
    const checked = record.entries.filter((entry) => entry.type === "check");
    const written = record.entries.filter((entry) => entry.type !== "check");
    const checkedBlock = checked.length
      ? `<div class="check-grid record-card-checks" aria-label="내가 표시한 항목">
          ${checked
            .map(
              (entry, index) => `<section>
                <span>CHECK ${String(index + 1).padStart(2, "0")}</span>
                <h3>${escapeHtml(entry.label)}</h3>
              </section>`
            )
            .join("")}
        </div>`
      : "";
    const writtenBlock = written.length
      ? written
          .map(
            (entry, index) => `<div class="activity-item record-card-entry">
              <label><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(entry.label)}</label>
              <div class="record-card-answer">${escapeHtml(entry.value)}</div>
            </div>`
          )
          .join("")
      : "";

    return `<article class="record-card workbook-record-card">
      <header class="record-card-hero">
        <div class="workbook-topline">
          <span>JARAM WORKBOOK RECORD</span>
          <span>${new Date().toLocaleDateString("ko-KR")}</span>
        </div>
        <div class="record-card-hero-copy">
          <p class="hero-overline">읽고 · 살피고 · 가져가기</p>
          <h1>${escapeHtml(record.title)}</h1>
          <p>앞에서 작성한 기록과 다짐을 한 장의 보관용 카드로 모았습니다.</p>
        </div>
      </header>
      <section class="record-card-section">
        <header class="activity-heading">
          <div><span>MY RECORDS</span><h2>내가 남긴 기록</h2></div>
          <p>체크한 항목과 직접 쓴 문장만 모았습니다.</p>
        </header>
        ${checkedBlock}
        <div class="activity-list record-card-list">${writtenBlock}</div>
      </section>
      <footer>이 기록은 사용자의 기기에서 만든 개인 보관용 카드입니다.</footer>
    </article>`;
  }

  function recordCardStyles() {
    return `
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-width: 320px;
        padding: 32px;
        background: #eee9dc;
        color: #26372e;
        font-family: "Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
        line-height: 1.75;
      }
      .record-card {
        width: min(860px, 100%);
        margin: 0 auto;
        overflow: hidden;
        border: 1px solid rgba(38, 55, 46, 0.2);
        background: #fffdf7;
        box-shadow: 0 18px 60px rgba(70, 69, 52, 0.12);
      }
      .record-card-hero {
        padding: 30px 42px 44px;
        background: #dbe2cd;
      }
      .workbook-topline {
        padding-bottom: 16px;
        display: flex;
        justify-content: space-between;
        gap: 18px;
        border-bottom: 1px solid rgba(38, 55, 46, 0.32);
        font-size: 10px;
        font-weight: 850;
        letter-spacing: 0.1em;
      }
      .record-card-hero-copy {
        padding-top: 72px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(220px, 0.54fr);
        gap: 40px;
        align-items: end;
      }
      .hero-overline,
      .activity-heading span,
      .record-card footer,
      .activity-item label span,
      .check-grid section > span {
        margin: 0;
        color: #df6e50;
        font-size: 10px;
        font-weight: 850;
        letter-spacing: 0.08em;
      }
      .record-card h1 {
        margin: 14px 0 0;
        font-size: clamp(31px, 5vw, 52px);
        line-height: 1.16;
        letter-spacing: -0.02em;
        word-break: keep-all;
      }
      .record-card-hero-copy p:last-child {
        margin: 0;
        color: #46564d;
        font-size: 14px;
        line-height: 1.9;
      }
      .record-card-section {
        padding: 48px 42px 56px;
        background: #dde4d1;
      }
      .activity-heading {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(220px, 0.52fr);
        gap: 28px;
        align-items: end;
      }
      .activity-heading h2 {
        margin: 8px 0 0;
        color: #26372e;
        font-size: 30px;
        line-height: 1.35;
      }
      .activity-heading > p {
        margin: 0;
        color: #536157;
        font-size: 12px;
        line-height: 1.7;
      }
      .check-grid {
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border-top: 1px solid #26372e;
        border-left: 1px solid rgba(38, 55, 46, 0.18);
      }
      .check-grid section {
        padding: 22px;
        border-right: 1px solid rgba(38, 55, 46, 0.18);
        border-bottom: 1px solid rgba(38, 55, 46, 0.18);
        background: rgba(255, 253, 247, 0.62);
      }
      .check-grid h3 {
        margin: 12px 0 0;
        color: #26372e;
        font-size: 14px;
        line-height: 1.55;
      }
      .activity-list {
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }
      .activity-item {
        padding: 26px;
        border: 1px solid rgba(38, 55, 46, 0.24);
        border-radius: 12px;
        background: rgba(255, 253, 247, 0.8);
      }
      .activity-item:first-child {
        border-top: 6px solid #df6e50;
      }
      .activity-item label {
        display: flex;
        align-items: baseline;
        gap: 10px;
        color: #26372e;
        font-size: 14px;
        font-weight: 800;
        line-height: 1.5;
      }
      .activity-item label span {
        width: 34px;
        flex: 0 0 auto;
      }
      .record-card-answer {
        margin-top: 16px;
        min-height: 82px;
        padding: 16px;
        border: 1px dashed rgba(38, 55, 46, 0.4);
        border-radius: 7px;
        background-color: rgba(255, 253, 247, 0.7);
        background-image: repeating-linear-gradient(to bottom, transparent 0, transparent 32px, rgba(38, 55, 46, 0.11) 33px);
        color: #26372e;
        font-size: 14px;
        line-height: 1.85;
        white-space: pre-wrap;
        word-break: keep-all;
      }
      .record-card footer {
        padding: 22px 42px 26px;
        background: #26372e;
        color: #eff2e7;
      }
      @media (max-width: 640px) {
        body { padding: 16px; }
        .record-card-hero,
        .record-card-section,
        .record-card footer { padding-left: 22px; padding-right: 22px; }
        .record-card-hero-copy,
        .activity-heading,
        .check-grid,
        .activity-list { grid-template-columns: 1fr; }
      }
      @media print {
        body { padding: 0; background: #fff; }
        .record-card { width: 100%; border: 0; box-shadow: none; }
        .record-card-hero,
        .record-card-section,
        .activity-item,
        .check-grid section { background: #fff !important; }
      }
    `;
  }

  updateProgress();
  updateRecordPreview();
})();
