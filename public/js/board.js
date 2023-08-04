const mainBar = document.querySelector("#bars")
const logo = document.querySelector("#logo")
const navLink = document.querySelectorAll(".nav-link")
const header = document.querySelector("#header")
const hero = document.querySelector(".hero")
const resBars = document.querySelector("#res-bars")
const sidebar = document.querySelector("#sidebar")
const xMark = document.querySelector("#x-mark")

mainBar.onclick = () => {
    logo.classList.toggle("active")
    navLink.forEach((e) => {
        e.classList.toggle("active")
    })
    header.classList.toggle("active")
}
resBars.onclick = () => {
    sidebar.classList.toggle("active")
}
xMark.onclick = () => {
    sidebar.classList.remove("active")
}


/*  loaction search script starts  */
const avialableLocations = [
    'hyderabad', 'rajahmundry', 'kakinada', 'chennai', 'delhi', 'noida', 'tirupathi', 'bangalore', 'pune', 'agra', 'vijayawada', 'ahmedabad', 'vizag', "Kurnool",
    "Machilipatnam",
    "Nagarjunakoṇḍa",
    "Srikakulam", "Visakhapatnam",
    "Vizianagaram",
    "Yemmiganur","tamarada"
]

const boxContainer = document.querySelector(".box-container")

avialableLocations.map((location) => {
    const div = document.createElement("div")
    div.className = "box-1"
    const input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    const label = document.createElement("label")
    label.innerText = location
    div.appendChild(input)
    div.appendChild(label)
    boxContainer.appendChild(div)
})

const locationInput = document.querySelector("#location-input")

locationInput.addEventListener("keyup", () => {
    let location2 = locationInput.value.toUpperCase()
    const box = document.querySelectorAll(".box")
   
    for(let i=0; i<avialableLocations.length; i++){
        let match = box[i].getElementsByTagName("label")[0]
        if(match){
            let text = match.textContent
            if(text.toUpperCase().includes(location2)){
                box[i].style.display = ""
            }
            else{
                box[i].style.display = "none"
            }
        }
    }
})


var locationBtn = document.querySelector("#location-btn")
const boardLocation = document.querySelector(".board-location")
locationBtn.onclick =() =>{
    boardLocation.classList.toggle("active")
} 


/*  loaction search script ends  */ 