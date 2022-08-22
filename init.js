const hero = document.querySelector("#hero");
const bg = document.querySelector("#bg");
const button = document.querySelector(".start");

function init(){
    setInterval(ghostAdd,2000);
    heroLocation = 383;
    
}
button.addEventListener("click",init)
