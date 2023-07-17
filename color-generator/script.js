
const genbtn = document.getElementById('gen-btn');
const delbtn = document.getElementById('del-btn');

let table = document.createElement("TABLE");
table.setAttribute("id", "hexCodes");
document.body.appendChild(table);

window.onload = function () {
    genbtn.click();
};

genbtn.addEventListener("click", function() {
    let num = 1;
    var row = table.insertRow(0);

    for (let i = 1; i < 6; i++) {
        let color = generateColor();
        let newCell = row.insertCell(num - 1);

        newCell.style.backgroundColor = color;
        newCell.textContent = color;
        newCell.style.fontSize = "x-large";
        
        num++;
    }
})

delbtn.addEventListener("click", function() {
    document.getElementById("hexCodes").deleteRow(0);
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