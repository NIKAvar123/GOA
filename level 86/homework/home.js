for (let i = 1; i <= 10; i++) {
    let div = document.getElementById("div");
    div.style.background = "red";
}


let classDivs = document.querySelectorAll(".classDiv");
classDivs.forEach((div) => {
    div.style.borderRadius = "10px";
});


let allDivs = document.querySelectorAll("div");
allDivs.forEach((div) => {
    div.style.boxShadow = "gray";
});