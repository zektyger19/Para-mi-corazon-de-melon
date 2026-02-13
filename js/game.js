import { initFinalButtons } from "./final.js";
import { changeState, STATES } from "./stateManager.js";
const gameScreen = document.getElementById("gameScreen");
const heartSound = document.getElementById("heartSound");

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

        if (heartSound) {
            heartSound.currentTime = 0;
            heartSound.play().catch(() => {});
        }

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
        initFinalButtons();

        const music = document.getElementById("music");
        if (music) {
            music.play().catch(() => {});
        }

        setTimeout(() => {
            import("./typewriter.js").then(module => {
                module.startTypewriter(
                    "Como decia la frase 'yo no queria enamorarme pero es que con vos siempre es algo aparte' y la verdad que si toda las cosas que hemos vivido se volvio especial para mi, mi niña bonita de sonrisa hermosa y bonita y quiero seguir ahi para ti, para toda la vida, esta vez pienso un futuro contigo a tu lado mi amor TE AMO MUCHOOOOOOOOOO💕\n\n❤️¿Quieres ser mi novia Silvana nuevamente?❤️",
                    "typewriter",
                    40
                );
            });
        }, 500);
    }

    else {
        alert("Oe pendeja no te hagas que son atrapar 15 corazones en 20 segundos aparte te los hice grande para que los veas psss oeeee. INTENTA DE NUEVO OE SUBNORMAL XD");
        startGame();
    }
}
