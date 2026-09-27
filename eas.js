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

let check = (size) => {
    if (size % 10 != 0 || size < 10 || size > 100) {
        alert("Number must be 10 > x > 100 and divisible by 10");
        createGrid(20);
    }
    else {
        createGrid(size);
    }
}


let size = 20;
createGrid(size);


sbtn.addEventListener("click", () => {
    size = Number(sizeInput.value);
    sizeInput.value = "";
    container.innerHTML = "";
    check(size);
});

