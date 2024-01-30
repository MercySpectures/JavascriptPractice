let r, b, g;



document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
    r = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

