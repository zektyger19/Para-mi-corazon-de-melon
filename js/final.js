export function initFinalButtons() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (!yesBtn || !noBtn) return;

    const isMobile = window.innerWidth < 768;

    //  Textos botón SÍ
    const yesTexts = [
        "¿Segura seguirismaaaaaa?",
        "¿Totalmente segura miraaaaa?",
        "¿De verdad? No me ilusiones :,v",
        "Mira que es para siempre y no hay vuelta atras owo",
        "Última oportunidad avisada estassss",
        "Bueno ya, acepto te dejo que ganes por esta vez ya que yo siempre gano 7u7"
    ];

    // Textos botón NO
    const noTexts = [
        "¿Como que no ctmre?",
        "Tanto que me costo hacer esta wea",
        "Pa que digas que no",
        "Seas loca",
        "nao",
        "mi",
        "pene",
        "m",
        "i",
        "p",
        "e",
        "n",
        "e",
        "chupon",
        "nao otra vez xd",
        "hola",
        "no tienes algo mejor que hacer, como darle click a CHI",

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
        noBtn.innerText = noTexts[noClickCount];
        noClickCount++;

        if (noClickCount >= noTexts.length) {
            noClickCount = 0; // 🔁 vuelve al inicio
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
        <h1>Pos dijiste que si uwuwuwuw siempre gano fuaaaaaa</h1>
        <p>Te amo gracias por ser mi novia (otra vez xd) uwu</p>
    `;
    }
}

