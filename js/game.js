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

    // 🎯 Tamaño adaptado a móvil
    const isMobile = window.innerWidth < 768;
    const size = isMobile
        ? Math.random() * 60 + 100   // móvil
        : Math.random() * 80 + 80;   // PC

    heart.style.fontSize = size + "px";

    let posX = Math.random() * (rect.width - size);
    let posY = Math.random() * (rect.height - size);

    heart.style.left = posX + "px";
    heart.style.top = posY + "px";

    // 🎯 Movimiento suave
    const speedX = (Math.random() - 0.5) * 3;
    const speedY = (Math.random() - 0.5) * 3;

    const moveInterval = setInterval(() => {
        posX += speedX;
        posY += speedY;

        // Rebotar en bordes
        if (posX <= 0 || posX >= rect.width - size) {
            posX = Math.max(0, Math.min(posX, rect.width - size));
        }

        if (posY <= 0 || posY >= rect.height - size) {
            posY = Math.max(0, Math.min(posY, rect.height - size));
        }

        heart.style.left = posX + "px";
        heart.style.top = posY + "px";
    }, 16);

    heart.addEventListener("click", () => {
        score++;
        document.getElementById("score").innerText = score;

        clearInterval(moveInterval);

        heart.classList.add("heart-pop");

        setTimeout(() => {
            heart.remove();
        }, 300);

        if (score >= TARGET_SCORE) {
            setTimeout(() => endGame(true), 400);
        }
    });

    gameScreen.appendChild(heart);

    // ⏳ Desaparece si no lo tocan
    setTimeout(() => {
        clearInterval(moveInterval);
        heart.remove();
    }, 1800);
}

function startTimer() {
    gameInterval = setInterval(() => {
        timeLeft--;
        const timerElement = document.getElementById("timer");
        if (timerElement) {
            timerElement.innerText = timeLeft;
        }

        if (timeLeft <= 0) {
            endGame(score >= TARGET_SCORE);
        }
    }, 1000);
}

function endGame(win) {
    clearInterval(gameInterval);
    clearInterval(heartInterval);

    // Limpiar corazones restantes
    document.querySelectorAll(".click-heart").forEach(heart => heart.remove());

    if (win) {
        changeState(STATES.FINAL);
    } else {
        alert("Casi lo logras 😢 intenta de nuevo");
        startGame();
    }
}
