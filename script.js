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
    //this.classList.add("newColor");
    //console.log(this.classList);

    if (this.classList.contains("child")) {
        this.classList.remove("child");
        this.classList.add("level1");
    } else if (this.classList.contains("level1")) {
        this.classList.remove("level1");
        this.classList.add("level2");
    } else if (this.classList.contains("level2")) {
        this.classList.remove("level2");
        this.classList.add("level3");
    } else if (this.classList.contains("level3")) {
        this.classList.remove("level3");
        this.classList.add("level4");
    } else if (this.classList.contains("level4")) {
        this.classList.remove("level4");
        this.classList.add("level5");
    } else if (this.classList.contains("level5")) {
        this.classList.remove("level5");
        this.classList.add("level6");
    } else if (this.classList.contains("level6")) {
        this.classList.remove("level6");
        this.classList.add("level7");
    } else if (this.classList.contains("level7")) {
        this.classList.remove("level7");
        this.classList.add("level8");
    } else if (this.classList.contains("level8")) {
        this.classList.remove("level8");
        this.classList.add("level9");
    } else if (this.classList.contains("level9")) {
        this.classList.remove("level9");
        this.classList.add("level10");
    }
    
    //setTimeout(() => { this.classList.remove("newColor"); }, 500);
}

createGrid();