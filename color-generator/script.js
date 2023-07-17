const colors = ["pink", "blue", "yellow"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');

window.onload = function () {
    document.getElementById("btn").click();
};

btn.addEventListener("click", function() {
    let num = 1;

    for (let i = 1; i < 6; i++) {
        let hexColor = generateColor();
        let current = "color" + num;

        document.getElementById(current).style.backgroundColor = hexColor;
        document.getElementById(current).textContent = hexColor;
        document.getElementById(current).style.fontSize = "x-large";

        num++;
    }
})

function generateColor() {
    let hexColor = "#";

    for (let j = 0; j < 6; j++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}