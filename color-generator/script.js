
const btn = document.getElementById('gen-btn');

window.onload = function () {
    btn.click();
};

btn.addEventListener("click", function() {
    let table = document.getElementById("hexCodes");
    let num = 1;
    let row = table.insertRow(0);

    for (let i = 1; i < 6; i++) {
        let color = generateColor();
        let current = "color" + num;
        let newCell = row.insertCell(num - 1);

        newCell.style.backgroundColor = color;
        newCell.textContent = color;
        newCell.style.fontSize = "x-large";

        document.getElementById(current).style.backgroundColor = color;
        document.getElementById(current).textContent = color;
        document.getElementById(current).style.fontSize = "x-large";
        
        num++;
    }
})

function generateColor() {
    let color = "rgb("
    for (let i = 0; i < 3; i++) {
        color += getRandomNumber();
        if (i != 2) {
            color += ",";
        }
    }
    color += ")"
    return color;
}

function getRandomNumber(min = 150, max = 255) {
    let diff, rand;
    diff = max - min;
    rand = Math.floor(Math.random() * diff);
    rand = rand + min;

    return rand;

}