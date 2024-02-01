//variable to target buttons
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

//variable to target counter
let val = document.getElementById("value");

//increasing value
increase.addEventListener("click", ()=>{
    val.innerText = ++val.innerText;
    updateColor();
})

//decreasing value
decrease.addEventListener("click", ()=>{
    val.innerText = --val.innerText;
    updateColor();
})

//resetiing value
reset.addEventListener("click", ()=>{
    val.innerText = 0;
    updateColor();
})

//function to update color
function updateColor(){
    if(val.innerText > 0){
        val.style.color = "green";
    }
    else if(val.innerText < 0){
        val.style.color = "red";
    }
    else{
        val.style.color = "black";
    }
}