const canvas = document.getElementById("petalCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petalCount = 60;
const petals = [];
const petalSize = 16;

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.speed = 1 + Math.random() * 2;
    this.angle = Math.random() * Math.PI * 2;
    this.size = petalSize;
    this.swing = Math.random() * 2;
  }

  update() {
    this.y += this.speed;
    this.x += Math.sin(this.angle) * this.swing;
    this.angle += 0.01;
    if (this.y > canvas.height) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#e63946";
    ctx.ellipse(this.x, this.y, this.size * 0.5, this.size, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < petalCount; i++) {
  petals.push(new Petal());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach(petal => {
    petal.update();
    petal.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});