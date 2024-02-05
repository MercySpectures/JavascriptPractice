var all = document.getElementById("all");
var breakfast = document.getElementById("breakfast");
var lunch = document.getElementById("lunch");
var shake = document.getElementById("shakes");
var dinner = document.getElementById("dinner");

var breakfastCard = document.querySelectorAll(".breakfast");
var lunchCard = document.querySelectorAll(".lunch");
var shakeCard = document.querySelectorAll(".shake");
var dinnerCard = document.querySelectorAll(".dinner");
var allCard = document.querySelectorAll(".card");

all.addEventListener("click", ()=>{
    allCard.forEach(card => {
        card.style.display = "flex";
    });
})

breakfast.addEventListener("click", ()=>{
    allCard.forEach(card => {
        card.style.display = "none";
    });
    breakfastCard.forEach(card => {
        card.style.display = "flex";
    });
})

lunch.addEventListener("click", ()=>{
    allCard.forEach(card => {
        card.style.display = "none";
    });
    lunchCard.forEach(card => {
        card.style.display = "flex";
    });
})

shake.addEventListener("click", ()=>{
    allCard.forEach(card => {
        card.style.display = "none";
    });
    shakeCard.forEach(card => {
        card.style.display = "flex";
    });
})

dinner.addEventListener("click", ()=>{
    allCard.forEach(card => {
        card.style.display = "none";
    });
    dinnerCard.forEach(card => {
        card.style.display = "flex";
    });
})