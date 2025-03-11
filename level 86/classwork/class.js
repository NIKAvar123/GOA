for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `ეს არის ${i + 1}-ე პარაგრაფი`; 
    div.appendChild(p);
    document.body.appendChild(div);
}


let paragraphs = document.querySelectorAll("div p");
paragraphs.forEach(p => {
    p.style.fontSize = "3px";
});
