function changeFontSize() {
    let elements = document.getElementsByTagName("p");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = "20px";
    }
}