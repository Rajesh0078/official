const mainBar = document.querySelector("#bars")
const logo = document.querySelector("#logo")
const navLink = document.querySelectorAll(".nav-link")

mainBar.onclick = () =>{
    logo.classList.toggle("active")
    navLink.forEach((e)=>{
        e.classList.toggle("active")
    })
}