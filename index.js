const PIXEL_SIZE = 640;

let container = document.getElementById("container");
document.body.addEventListener("mousedown", addListeners);
document.body.addEventListener("mouseup", removeListeners);

let slider = document.getElementById("slider");
let BOX_AMOUNT = slider.value;
slider.oninput = createBoard;

let mode = "black";

document.getElementById("black").addEventListener("click", () => mode = "black");
document.getElementById("rainbow").addEventListener("click", () => mode = "rainbow");
document.getElementById("reset").addEventListener("click", createBoard);

createBoard();

function createBoard(){
    BOX_AMOUNT = slider.value;
    container.innerHTML = "";
    let tile_size = PIXEL_SIZE / BOX_AMOUNT;
    for (let i = 0; i < BOX_AMOUNT; i++){
        let row = document.createElement("div");
        row.classList += "row";
        for (let j = 0; j < BOX_AMOUNT; j++){
            let box = document.createElement("div");
            box.addEventListener("click", changeColor);
            box.classList += "tile";
            box.style.height = tile_size + "px";
            box.style.width = tile_size + "px";
            box.id = createID(i, j);
            box.draggable = false;
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function createID(i, j){
    ii = i < 10 ? "0" + i : i;
    jj = j < 10 ? "0" + j : j;
    return "" + ii + jj;
}

function changeColor(event){
    if (mode === "black"){
        event.target.style.backgroundColor = "black";
    }
    if (mode === "rainbow"){
        let colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
        event.target.style.backgroundColor = colors[Math.floor(Math.random() * 7)];
    }
}

function addListeners(){
    Array.from(document.getElementsByClassName("tile")).forEach(tile => {
        tile.addEventListener("mouseover", changeColor);
    });
}

function removeListeners(){
    Array.from(document.getElementsByClassName("tile")).forEach(tile => {
        tile.removeEventListener("mouseover", changeColor);
    });
}

function randomRainbowColor(){

}