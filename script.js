// -------------------
// BUTTON PANEL
// -------------------
const buttons = document.querySelectorAll(".action-btn");
const outputMsg = document.getElementById("outputMsg");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        outputMsg.textContent = this.dataset.msg; // using THIS
    });
});

// -------------------
// IMAGE EFFECTS
// -------------------
const img = document.getElementById("imageBox");
let rotateValue = 0;

document.getElementById("rotateBtn").onclick = () => {
    rotateValue += 30;
    img.style.transform = `rotate(${rotateValue}deg)`;
};

document.getElementById("blurBtn").onclick = () => {
    img.style.filter = "blur(3px)";
};

document.getElementById("resetImg").onclick = () => {
    rotateValue = 0;
    img.style.transform = "rotate(0deg)";
    img.style.filter = "none";
};

// -------------------
// LIVE STYLE CONTROLLER
// -------------------
const colorPick = document.getElementById("colorPick");
const radiusRange = document.getElementById("radiusRange");
const styleLive = document.getElementById("styleLive");

colorPick.addEventListener("input", function () {
    styleLive.style.color = this.value;   // using THIS
});

radiusRange.addEventListener("input", function () {
    styleLive.style.borderRadius = this.value + "px"; // using THIS
});

// -------------------
// BALL MOVEMENT
// -------------------
const ball = document.getElementById("ball");
let x = 130, y = 65;

function moveBall() {
    ball.style.left = x + "px";
    ball.style.top = y + "px";
}

document.getElementById("moveLeft").onclick = () => { x -= 10; moveBall(); };
document.getElementById("moveRight").onclick = () => { x += 10; moveBall(); };
document.getElementById("moveUp").onclick = () => { y -= 10; moveBall(); };
document.getElementById("moveDown").onclick = () => { y += 10; moveBall(); };

// -------------------
// INPUT MIRROR
// -------------------
const nameField = document.getElementById("nameField");
const nameShow = document.getElementById("nameShow");

nameField.addEventListener("input", function () {
    nameShow.textContent = this.value.trim() || "Guest"; // using THIS
});
