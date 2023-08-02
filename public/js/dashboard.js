const mainBar = document.querySelector("#bars")
const logo = document.querySelector("#logo")
const navLink = document.querySelectorAll(".nav-link")
const header = document.querySelector("#header")
const hero = document.querySelector(".hero")
const resBars = document.querySelector("#res-bars")
const sidebar = document.querySelector("#sidebar")
const xMark = document.querySelector("#x-mark")

mainBar.onclick = () =>{
    logo.classList.toggle("active")
    navLink.forEach((e)=>{
        e.classList.toggle("active")
    })
    header.classList.toggle("active")
    hero.classList.toggle("active")
}
resBars.onclick= () =>{
    sidebar.classList.toggle("active")
}
xMark.onclick= () =>{
    sidebar.classList.remove("active")
}