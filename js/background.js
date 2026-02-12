const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Heart {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText("💗", this.x, this.y);
        ctx.globalAlpha = 1;
    }

    update() {
        this.y += this.speed;

        if (this.y > canvas.height + 20) {
            this.x = Math.random() * canvas.width;
            this.y = -20;
        }

        this.draw();
    }
}

const hearts = [];
const HEART_COUNT = 40;

for (let i = 0; i < HEART_COUNT; i++) {
    hearts.push(new Heart());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(heart => heart.update());

    requestAnimationFrame(animate);
}

animate();
