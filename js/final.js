export function initFinalButtons() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (!yesBtn || !noBtn) return;

    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
        // 💻 PC → botón escapa
        noBtn.addEventListener("mouseover", () => {
            const x = Math.random() * 200 - 100;
            const y = Math.random() * 200 - 100;
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
        });
    } else {
        // 📱 Móvil → efecto divertido en vez de escapar
        noBtn.addEventListener("click", () => {
            noBtn.style.transform = "scale(1.2)";
            setTimeout(() => {
                noBtn.style.transform = "scale(1)";
            }, 200);
        });
    }

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
