const container = document.querySelector("#container");
const sizeInput = document.querySelector("#sizeInput");
const sbtn = document.querySelector("#sbtn");

let createGrid = (size) => {
    for (let i = 0; i < size; i++){
    const newdiv = document.createElement("div");
    newdiv.classList.add("box");
    container.appendChild(newdiv);
    container.style.width = "500px";


    newdiv.addEventListener("mouseover", () => newdiv.style.backgroundColor="gray");
}};


let size = 20;
createGrid(size);


sbtn.addEventListener("click", () => {
    container.innerHTML = "";
    size = sizeInput.value;
    createGrid(size);
});

