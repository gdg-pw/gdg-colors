// Efekty: symbole w tle + Konami (całość w funkcji, żeby nie mieszać zmiennych z innymi plikami)

function initEffects() {
  const canvas = document.getElementById("bg-canvas");

  // Kolory bierzemy z CSS (css/variables.css), więc zmieniasz je tylko tam
  const css = getComputedStyle(document.documentElement);
  const colors = ["--blue", "--red", "--yellow", "--green"].map(v => css.getPropertyValue(v).trim());

  // ---------- Symbole w tle (paleta je zasłania, widać je w hero) ----------
  const SYMBOLS = ["{ }", "< >", "[ ]", ";;", "if()", "=>", "null", "git", "#hex", "GDG"]; // dodaj swoje
  const SYMBOL_COUNT = 30;                                                                 // ile naraz

  for (let i = 0; i < SYMBOL_COUNT; i++) {
    const s = document.createElement("span");
    s.className = "code-symbol";
    s.textContent = pickRandom(SYMBOLS);
    s.style.color = pickRandom(colors);
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = (Math.random() * 8 + 12) + "s";
    s.style.animationDelay = -(Math.random() * 20) + "s";
    canvas.appendChild(s);
  }

  // ---------- Konami code -> paski migają kolorami GDG ----------
  const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let idx = 0, partyActive = false;

  document.addEventListener("keydown", (e) => {
    if (e.key === KONAMI[idx]) {
      idx++;
      if (idx === KONAMI.length) { idx = 0; party(); }
    } else {
      idx = e.key === KONAMI[0] ? 1 : 0;
    }
  });

  function party() {
    if (partyActive) return;
    partyActive = true;
    document.body.classList.add("party");
    showToast("🎉 easter egg odkryty");
    setTimeout(() => {
      document.body.classList.remove("party");
      partyActive = false;
    }, 5000);
  }
}
