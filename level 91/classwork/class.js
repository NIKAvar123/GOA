const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexDirection = "column-reverse";

let size = 50;
for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.style.cssText = "width: 40px; height: 50px;  margin: 5px; text-align: center;";
    div.innerText = "Size: 50px";

    container.appendChild(div);
    size *= 2;
} 
