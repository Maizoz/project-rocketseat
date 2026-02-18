const btn = document.querySelector("#toggle")
btn.addEventListener("click", toggleMode)

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
}
