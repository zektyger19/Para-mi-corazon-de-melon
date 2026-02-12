import "./background.js";

import { changeState, STATES } from "./stateManager.js";

const startBtn = document.getElementById("startBtn");

// Botón para iniciar juego
startBtn.addEventListener("click", () => {
    changeState(STATES.GAME);

    // Simulación temporal: pasar a final después de 3 segundos
    setTimeout(() => {
        changeState(STATES.FINAL);
    }, 3000);
});
