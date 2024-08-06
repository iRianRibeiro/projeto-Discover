function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Rian Ribeiro com blusa preta e iluminaçao laranja"
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Rian Ribeiro com blusa preta e iluminação verde"
    )
  }
}
