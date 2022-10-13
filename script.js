const container = document.querySelector(".container");
function createGrid(num) {
    for (let i = 0; i < (num * num); i++) {
        let div = document.createElement("div");
        div.classList.add("child");
        div.style.width = (960 / num) + "px";
        div.style.height = (960 / num) + "px";
        div.addEventListener("mouseover", hover);
        container.appendChild(div);
    }
}

createGrid(40);

function hover() {
    this.classList.add("newColor");
    setTimeout(() => { this.classList.remove("newColor"); }, 500);
}