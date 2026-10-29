// Paleta: paski z COLORS (js/data.js), kliknięcie kopiuje HEX

const COPY_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

function initPalette() {
  const palette = document.getElementById("palette");

  palette.innerHTML = COLORS.map(c => {
    const hex = c.hex.toUpperCase();
    return `
      <button class="swatch" style="background:${hex}; color:${textOn(hex)}" data-hex="${hex}" data-name="${c.name}" aria-label="${c.name}, ${hex}. Kopiuj">
        <span class="sw-label">
          <span class="sw-hex">${hex.slice(1)}</span>
          <span class="sw-name">${c.name}</span>
          <span class="sw-icon">${COPY_ICON}</span>
        </span>
      </button>`;
  }).join("");

  palette.addEventListener("click", async (e) => {
    const sw = e.target.closest(".swatch");
    if (!sw) return;
    const ok = await copyText(sw.dataset.hex);
    showToast(ok
      ? `<span class="toast-dot" style="background:${sw.dataset.hex}"></span>Skopiowano <b>${sw.dataset.hex}</b>&nbsp;· ${sw.dataset.name}`
      : `Nie udało się skopiować. ${sw.dataset.hex}`);
    sw.classList.remove("flash");
    void sw.offsetWidth;   // restart animacji
    sw.classList.add("flash");
  });
}
