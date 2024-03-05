//Using Javascript to interact with the HTML document specific classes and ids and assigning them to constant values.

//Initializing some variables for the main-game.
let headsValue = 0;
let tailsValue = 0;
let coin = document.querySelector(".coin");
let coinFlipBtn = document.querySelector("#coinflipBtn");
let resetBtn = document.querySelector("#resetBtn");
initializeGame();

//Initializing one audio variable. This audio file is royalty free.
const coinFlipAudio = new Audio();
coinFlipAudio.src = "./assets/audio/coin-flip.mp3";


function initializeGame() {
    coinFlipBtn.addEventListener("click", flipCoin);
    resetBtn.addEventListener("click", resetScore);
}



function flipCoin() {
    
    let x = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    if(x) {
        setTimeout(() => {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        headsValue++
    }
    else {
        setTimeout(() => {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tailsValue++
    }
    setTimeout(updateScore, 3000);
    disableButton();
}

function disableButton() {
    coinFlipBtn.disabled = true;

    setTimeout(() => {
        coinFlipBtn.disabled = false;
    }, 3000);

}

function updateScore() {
    document.querySelector("#heads-count").textContent = `Heads: ${headsValue}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tailsValue}`;
}

function resetScore() {
    headsValue = 0;
    tailsValue = 0;
    updateScore();
}