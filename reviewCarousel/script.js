let images = ["./img1.webp", "./img2.webp", "./img3.webp", "./img4.png", ];
let names = ["Aman Shrivas", "Jay Pradhan", "Shivashish Dhurvey", "Anirudh Tiwari"];
let designations = ["Web Developer", "SSC Aspirant", "Graphic Designer", "MMBS Doctor"];
let text = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laborum, ea sapiente a consequuntur officiis corporis nulla vero eveniet fugit!",
    "JayLorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laborum, ea sapiente a consequuntur officiis corporis nulla vero eveniet fugit!",
    "ShivashishLorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laborum, ea sapiente a consequuntur officiis corporis nulla vero eveniet fugit!",
    "AniLorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laborum, ea sapiente a consequuntur officiis corporis nulla vero eveniet fugit!"
];

let prev = document.getElementsByTagName("span")[0];
let next = document.getElementsByTagName("span")[1];

let img = document.getElementById("image");
let name = document.getElementById("name");
let designation = document.getElementById("designation");
let txt = document.getElementById("text");

let surprise = document.getElementsByTagName("button")[0];

let currentIndex = 0;


function updateValues(index){
    img.setAttribute("src",images[index]);
    name.innerText = names[index];
    designation.innerText = designations[index];
    txt.innerText = text[index];
}

prev.addEventListener("click", ()=>{
    if(currentIndex > 0){
        updateValues(--currentIndex);
    }else if(currentIndex === 0){
        updateValues(currentIndex);
    }
})

next.addEventListener("click", ()=>{
    if(currentIndex < 3){
        updateValues(++currentIndex);
    }else if(currentIndex === 3){
        updateValues(currentIndex);
    }
})

surprise.addEventListener("click", ()=>{
    let randomIndex = Math.floor(Math.random()*4);
    updateValues(randomIndex);
})