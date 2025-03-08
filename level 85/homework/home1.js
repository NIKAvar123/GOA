function changeColor() {
    let elements = document.getElementsByClassName("text");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "red";
    }
}