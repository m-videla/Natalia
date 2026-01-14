const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

if (toggle) {
  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-bs-theme");
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-bs-theme", next);
    toggle.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

const countdownEl = document.getElementById("countdown");
const countdownScreen = document.getElementById("countdown-screen");
const siteContent = document.getElementById("site-content");

const targetDate = new Date("2026-01-14T13:01:00-03:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownScreen.classList.add("d-none");
    siteContent.classList.remove("d-none");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
