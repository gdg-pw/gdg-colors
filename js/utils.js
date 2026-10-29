// Małe funkcje pomocnicze

// Losowy element z tablicy
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Ciemny czy jasny tekst na danym tle
function textOn(hex) {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.55 ? "rgba(0,0,0,0.72)" : "rgba(255,255,255,0.92)";
}

// Kopiuj do schowka. Bez HTTPS (np. adres IP w sieci lokalnej) clipboard API nie działa, wtedy stary sposób
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch {}
  ta.remove();
  return ok;
}

// Krótki komunikat na dole ekranu
let toastTimer;
function showToast(html) {
  const t = document.getElementById("toast");
  t.innerHTML = html;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1600);
}
