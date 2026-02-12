import { changeState, STATES } from "./stateManager.js";

const gameScreen = document.getElementById("gameScreen");

let score = 0;
let timeLeft = 20;
let gameInterval;
let heartInterval;

const TARGET_SCORE = 15;

export function startGame() {
    score = 0;
    timeLeft = 20;

    document.getElementById("score").innerText = score;

    spawnHearts();
    startTimer();
}

function spawnHearts() {
    heartInterval = setInterval(() => {
        createHeart();
    }, 800);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("click-heart");
    heart.innerHTML = "💘";

    const rect = gameScreen.getBoundingClientRect();

    // 🔥 TAMAÑO DEL CORAZÓN
    const size = Math.random() * 80 + 80; // entre 80px y 160px
    heart.style.fontSize = size + "px";

    heart.style.left = Math.random() * (rect.width - size) + "px";
    heart.style.top = Math.random() * (rect.height - size) + "px";

    heart.addEventListener("click", () => {
        score++;
        document.getElementById("score").innerText = score;

        heart.classList.add("heart-pop");

        setTimeout(() => {
            heart.remove();
        }, 300);

        if (score >= TARGET_SCORE) {
            setTimeout(() => endGame(true), 400);
        }
    });

    gameScreen.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1500);
}


function startTimer() {
    gameInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            endGame(score >= TARGET_SCORE);
        }
    }, 1000);
}

function endGame(win) {
    clearInterval(gameInterval);
    clearInterval(heartInterval);

    if (win) {
        changeState(STATES.FINAL);
    } else {
        alert("Casi lo logras 😢 intenta de nuevo");
        startGame();
    }
}
