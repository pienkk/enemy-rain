// class Enemy {
  
// }
let kill = 0;
function ghostAdd(){
    const ghostNum = Math.floor(Math.random()*10000);
    const ghost = document.createElement("div");
    ghost.className = "ghost";
    ghost.classList.add(ghostNum);
    bg.appendChild(ghost);
    ghostNumbering(ghostNum);
}

function ghostMove(account){
    let die = 0;
    let yValue = 0;
    
    const xValue = Math.floor(Math.random()*750);
    account.style.marginLeft = `${xValue}px`;
    function ghostDown(){
        yValue += 10;
        account.style.marginTop = `${yValue}px`;
        if(yValue > 545){
            account.remove();
        }
        if(yValue > 500 && xValue-heroLocation > -25 && xValue-heroLocation < 25 || die === 1){
            account.className = "die"
            yValue -= 10;
            die = 1;
            setTimeout(() => account.remove(),1000);
        }
    }
    setInterval(ghostDown,500);
    if(die == 1){
        kill += 1;
    }
    function ghostDie(){
        const count = document.querySelector("#killCount");
        kill += 1;
        count.innerText = kill;
    }
}
function ghostNumbering(num) {
    const ghostAcount = document.getElementsByClassName(num)[0];
    ghostMove(ghostAcount);
}

