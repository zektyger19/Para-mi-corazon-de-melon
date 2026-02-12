export const STATES = {
    START: "start",
    GAME: "game",
    FINAL: "final"
};

let currentState = STATES.START;

const screens = {
    start: document.getElementById("startScreen"),
    game: document.getElementById("gameScreen"),
    final: document.getElementById("finalScreen")
};

export function changeState(newState) {
    Object.values(screens).forEach(screen => {
        screen.classList.add("hidden");
        screen.classList.remove("active");
    });

    screens[newState].classList.remove("hidden");
    screens[newState].classList.add("active");

    currentState = newState;
}

export function getCurrentState() {
    return currentState;
}
