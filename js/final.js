export function initFinalButtons() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (!yesBtn || !noBtn) return;

    const isMobile = window.innerWidth < 768;

    // 💘 Textos botón SÍ
    const yesTexts = [
        "¿Estás segura? 😳",
        "¿Totalmente segura? 😏",
        "¿Segurísima? 💖",
        "Mira que es para siempre 😌",
        "Última oportunidad 😜",
        "Bueno ya, acepto ❤️"
    ];

    // 😈 Textos botón NO
    const noTexts = [
        "¿Segura que no? 🤨",
        "Piénsalo bien 😅",
        "No seas así 😢",
        "Te vas a arrepentir 😏",
        "Ok… lo respeto 😔"
    ];

    let yesClickCount = 0;
    let noClickCount = 0;

    // 💘 BOTÓN SÍ
    yesBtn.addEventListener("click", () => {
        if (yesClickCount < yesTexts.length) {
            yesBtn.innerText = yesTexts[yesClickCount];
            yesClickCount++;
        } else {
            showFinalMessage();
        }
    });

    // 😈 BOTÓN NO cambia texto si logran hacer click
    noBtn.addEventListener("click", () => {
        if (noClickCount < noTexts.length) {
            noBtn.innerText = noTexts[noClickCount];
            noClickCount++;
        }
    });

    // 💻 Solo en PC el botón NO escapa
    if (!isMobile) {
        noBtn.addEventListener("mouseover", () => {
            const x = Math.random() * 200 - 100;
            const y = Math.random() * 200 - 100;
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    function showFinalMessage() {
        const finalScreen = document.getElementById("finalScreen");

        finalScreen.innerHTML = `
        <h1>❤️ Sabía que dirías que sí ❤️</h1>
        <p>Te amo infinitamente 💕</p>
    `;
    }
}

