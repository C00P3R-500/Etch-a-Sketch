const container = document.querySelector("#container");


for (let i = 0; i < 16; i++){
    const newdiv = document.createElement("div");
    newdiv.classList.add("box");
    container.appendChild(newdiv);

    newdiv.addEventListener("mouseover", () => newdiv.style.backgroundColor="gray");
    
}