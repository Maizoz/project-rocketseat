const btn = document.querySelector("#toggle")
const html = document.documentElement
const profileImg = document.querySelector("#profile img")

// começa em dark
html.classList.remove("light")
profileImg.src = "assets/perfil.png/Perfil.PNG"

btn?.addEventListener("click", () => {
  html.classList.toggle("light")

  profileImg.src = html.classList.contains("light")
    ? "assets/perfil.png/Perfil-light.PNG"
    : "assets/perfil.png/Perfil.PNG"
})
