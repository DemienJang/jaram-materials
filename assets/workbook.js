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

    field.addEventListener("input", () => {
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
    });
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

  updateProgress();
})();
