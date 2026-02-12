export const STATES = {
    START: "startScreen",
    GAME: "gameScreen",
    FINAL: "finalScreen"
};

export function changeState(newState) {
    // Ocultar todas las pantallas
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
        screen.classList.remove("active");
    });

    // Mostrar la pantalla seleccionada
    const screenToShow = document.getElementById(newState);
    if (screenToShow) {
        screenToShow.classList.remove("hidden");
        screenToShow.classList.add("active");
    }
}
