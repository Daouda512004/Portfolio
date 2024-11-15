// script.js

// Effet Dark/Light Mode
document.getElementById("theme-toggle").addEventListener("click", function() {
    const currentTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    this.textContent = currentTheme === "dark" ? "🌙" : "☀️";
});

// Animation du Canvas pour un effet visuel dynamique
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00bcd4";
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 5, 0, Math.PI * 2);
    ctx.fill();
    requestAnimationFrame(drawParticles);
}

drawParticles();
