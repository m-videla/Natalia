const toggle = document.getElementById("themeToggle")
const html = document.documentElement

toggle.addEventListener("click", () => {
  const current = html.getAttribute("data-bs-theme")
  const next = current === "light" ? "dark" : "light"

  html.setAttribute("data-bs-theme", next)
  toggle.textContent = next === "dark" ? "☀️" : "🌙"
})
