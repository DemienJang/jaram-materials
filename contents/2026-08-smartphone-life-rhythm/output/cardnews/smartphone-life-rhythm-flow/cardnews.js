const params = new URLSearchParams(window.location.search);
const exportCard = params.get("card");

if (params.get("export") === "1" && exportCard) {
  const selected = document.querySelector(`[data-card="${CSS.escape(exportCard)}"]`);

  if (selected) {
    document.body.classList.add("export-mode");
    selected.classList.add("is-exporting");
    document.title = `스마트폰을 빼앗기 전에 · 카드 ${exportCard}`;
  }
}
