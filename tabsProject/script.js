var title = document.querySelector(".content h3");
var txt = document.querySelector(".content p");
var img = document.querySelector(".box img");

var para = [
    "History Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ducimus eligendi iste voluptate autem maiores perferendis fuga dignissimos iusto culpa, mollitia, ad voluptatibus facilis quo libero! Iste sapiente iure assumenda!",
    "Vision Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ducimus eligendi iste voluptate autem maiores perferendis fuga dignissimos iusto culpa, mollitia, ad voluptatibus facilis quo libero! Iste sapiente iure assumenda!",
    "Goals Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ducimus eligendi iste voluptate autem maiores perferendis fuga dignissimos iusto culpa, mollitia, ad voluptatibus facilis quo libero! Iste sapiente iure assumenda!"
];

var images = [
    "./img1.jpg", "./img2.jpg", "img3.jpg"
];

var historyButton = document.getElementsByTagName("button")[0];
var visionButton = document.getElementsByTagName("button")[1];
var goalsButton = document.getElementsByTagName("button")[2];

historyButton.addEventListener("click", ()=>{
    title.innerHTML = historyButton.innerHTML;
    txt.innerHTML = para[0];
    img.setAttribute("src", images[0]);

})

visionButton.addEventListener("click", ()=>{
    title.innerHTML = visionButton.innerHTML;
    txt.innerHTML = para[1];
    img.setAttribute("src", images[1]);
})

goalsButton.addEventListener("click", ()=>{
    title.innerHTML = goalsButton.innerHTML;
    txt.innerHTML = para[2];
    img.setAttribute("src", images[2]);
})