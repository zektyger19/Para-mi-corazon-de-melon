export function initFinalButtons() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (!yesBtn || !noBtn) return;

    // Botón que se mueve
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Botón definitivo
    yesBtn.addEventListener("click", () => {
        document.body.innerHTML = `
            <div style="
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                background:black;
                color:white;
                text-align:center;
            ">
                <h1>❤️ Sabía que dirías que sí ❤️</h1>
                <p>Te amo infinitamente 💕</p>
            </div>
        `;
    });
}
