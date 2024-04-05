const btn = document.querySelector(".change-color");

btn.addEventListener("click", handelClick);

function handelClick() {
    const colorRgb = getRandomHexColor();
    document.body.style.backgroundColor = colorRgb;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}