// class Hero {
  
// }

let heroLocation = 383;
hero.style.marginLeft = `${heroLocation}px`;
function heroMove(e) {
    switch (e.keyCode){
        case 37:
            moveToHero("left");
            break;
        case 39:
            moveToHero("right");
            break;
        default:
            break;
    }
}

function heroStop() {
    hero.className = "hero";
}

function moveToHero(move) {
    if(move === "left"){
        hero.className = "hero-left"
        heroLocate(-10);
    }else if(move === "right"){
        hero.className = "hero-right"
        heroLocate(10);
    }
}

function heroLocate(move) {
    if(heroLocation > 5){
        if(move < 0){
            heroLocation += move;
            hero.style.marginLeft = `${heroLocation}px`;
        }
    }
    if(heroLocation < 760){
        if(move > 0){
            heroLocation += move;
            hero.style.marginLeft = `${heroLocation}px`;
        }
    }
}

window.addEventListener("keydown",heroMove); // 39 left , 37 right
window.addEventListener("keyup",heroStop);