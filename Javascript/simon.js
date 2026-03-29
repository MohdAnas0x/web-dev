let gameSeq = [];
let userSeq = [];

let btns = ["one", "two", "three", "four"];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started")
        started = true;

        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);

    gameSeq.push(randColor);
    console.log(gameSeq); 

    gameFlash(randBtn);

}

function btnPress() {
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute('class');
   userSeq.push(userColor);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}