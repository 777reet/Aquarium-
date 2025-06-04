const canvas = document.getElementById('ocean');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Bubbles
let bubbles = [];
for (let i = 0; i < 50; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * canvas.height,
    r: Math.random() * 4 + 2,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.3 + 0.2
  });
}

function drawBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let b of bubbles) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(168, 249, 255, ${b.opacity})`;
    ctx.fill();
    b.y -= b.speed;
    if (b.y < -10) {
      b.y = canvas.height + Math.random() * 100;
      b.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawBubbles);
}

//Jellyfish Interactions 
const jellyfish1 = document.querySelector('.jellyfish-1');
const jellyfish2 = document.querySelector('.jellyfish-2');
const jellyfish3 = document.querySelector('.jellyfish-3');

let moved1 = false, moved2 = false, moved3 = false;

jellyfish1.addEventListener('click', () => {
  moved1 = !moved1;
  jellyfish1.style.transform = moved1
    ? 'translate(calc(-60% + 50px), calc(-90% + 20px))'
    : 'translate(-60%, -90%)';
});

jellyfish2.addEventListener('click', () => {
  moved2 = !moved2;
  jellyfish2.style.transform = moved2
    ? 'translate(calc(-60% + 50px), calc(-90% + 20px))'
    : 'translate(-60%, -90%)';
});

jellyfish3.addEventListener('click', () => {
  moved3 = !moved3;
  jellyfish3.style.transform = moved3
    ? 'translate(calc(-60% + 50px), calc(-90% + 20px))'
    : 'translate(-60%, -90%)';
});

// ===== Octopus Interactions =====
const octopus1 = document.querySelector('.octopus-1');
const octopus2 = document.querySelector('.octopus-2');
const octopus3 = document.querySelector('.octopus-3');

let oMoved1 = false, oMoved2 = false, oMoved3 = false;

octopus1.addEventListener('click', () => {
  oMoved1 = !oMoved1;
  octopus1.style.transform = oMoved1
    ? 'translateY(-30px) scale(1.1)'
    : 'translateY(0) scale(1)';
});

octopus2.addEventListener('click', () => {
  oMoved2 = !oMoved2;
  octopus2.style.transform = oMoved2
    ? 'translateX(30px) scale(1.1)'
    : 'translateX(0) scale(1)';
});

octopus3.addEventListener('click', () => {
  oMoved3 = !oMoved3;
  octopus3.style.transform = oMoved3
    ? 'translate(-30px, -30px) scale(1.1)'
    : 'translate(0, 0) scale(1)';
});

// Resize Canvas
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start bubble animation
drawBubbles();
