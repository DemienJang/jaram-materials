const params = new URLSearchParams(window.location.search);
const exportCard = params.get("card");

if (params.get("export") === "1" && exportCard) {
  const selected = document.querySelector(`[data-card="${CSS.escape(exportCard)}"]`);

  if (selected) {
    document.body.classList.add("export-mode");
    selected.classList.add("is-exporting");
    document.title = `AI 시대, 진로교육은 첫 증거 만들기다 · 카드 ${exportCard}`;
  }
}
