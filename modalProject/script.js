let modalOpenButton = document.getElementById("button");
let modal = document.getElementById("modal");
let modelCloseButton = document.querySelector(".modalCard span");

modalOpenButton.addEventListener("click", ()=>{
    modal.style.visibility = "visible";
})

modelCloseButton.addEventListener("click", ()=>{
    modal.style.visibility = "hidden";
})