// Seleção dos elementos
const menuMobile = document.getElementById("menu-mobile")
const btnMenu = document.getElementById("btn-menu")
const linksMenu = document.querySelectorAll(".menu-mobile nav a")

// Adicionando evento para abrir e fechar o menu ao clicar no botão
btnMenu.addEventListener("click", () => {
  menuMobile.classList.toggle("abrir") // Controla a abertura do menu mobile
  btnMenu.classList.toggle("ativo") // Adiciona classe de animação no botão
})

// Fechar o menu quando um link for clicado
linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("abrir") // Fecha o menu ao clicar em um link
    btnMenu.classList.remove("ativo") // Restaura o botão
  })
})
