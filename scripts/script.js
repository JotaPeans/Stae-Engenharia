const servicos = document.querySelector(".servicos");
const dropdown = document.querySelector(".dropdown");

servicos.addEventListener("click", () => {
    servicos.classList.toggle("active")
    dropdown.classList.toggle("active")
})

const burguer = document.querySelector(".burguer")
const navbar = document.querySelector(".nav-links")
const body = document.querySelector("body")

burguer.addEventListener("click", () => {
    navbar.classList.toggle("active")
    burguer.classList.toggle("toggle")
    body.classList.toggle("hidden")
})