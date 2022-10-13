const container = document.querySelector(".container");
function createGrid(num = 16) {
    for (let i = 0; i < (num * num); i++) {
        let div = document.createElement("div");
        div.classList.add("child");
        div.style.width = (500 / num) + "px";
        div.style.height = (500 / num) + "px";
        div.addEventListener("mouseover", hover);
        container.appendChild(div);
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function newGrid() {
    let num = Number(prompt("How large do you want your grid (max is 100)", 16));
    if (num === 0 || num > 100) {
        alert("Invalid number entered");
        return;
    }
    clearGrid();
    createGrid(num);
}


function hover() {
    this.classList.add("newColor");
    //setTimeout(() => { this.classList.remove("newColor"); }, 500);
}

createGrid();