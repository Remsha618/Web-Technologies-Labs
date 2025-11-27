const box = document.getElementById("box");

function applyAction(callback) {
    callback(); 
}

function changeColor() {
    const colors = ["red", "green", "purple", "orange", "steelblue"];
    box.style.background = colors[Math.floor(Math.random() * colors.length)];
}

function resizeBox() {
    const newSize = document.getElementById("sizeSlider").value;
    box.style.width = newSize + "px";
    box.style.height = newSize + "px";
}

function playSound() {
    alert("🔊 Sound Triggered!");
    
}

let mode = 0;
function switchMode() {
    switch (mode) {
        case 0:
            box.style.borderRadius = "0%";
            mode = 1;
            break;

        case 1:
            box.style.borderRadius = "50%";
            mode = 2;
            break;

        case 2:
            box.style.transform = "rotate(20deg)";
            mode = 3;
            break;

        default:
            box.style.transform = "rotate(0deg)";
            mode = 0;
    }
}

document.getElementById("colorBtn").onclick = () => applyAction(changeColor);
document.getElementById("sizeSlider").oninput = () => applyAction(resizeBox);
document.getElementById("soundBtn").onclick = () => applyAction(playSound);
document.getElementById("modeBtn").onclick = () => applyAction(switchMode);
