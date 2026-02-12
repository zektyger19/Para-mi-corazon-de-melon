import { startGame } from "./game.js";

import "./background.js";

import { changeState, STATES } from "./stateManager.js";

const startBtn = document.getElementById("startBtn");

document.getElementById("start-btn").addEventListener("click", () => {
    changeState(STATES.GAME);
    startGame();
});
