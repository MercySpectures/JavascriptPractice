let menuButton = document.getElementById("menuIcon");
let menu = document.querySelector(".navItems");

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle("showMenu");
})