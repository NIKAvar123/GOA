
const outputText = document.getElementById("outputText");
const inputText = document.getElementById("inputText");
const inputColor = document.getElementById("inputColor");
const inputSize = document.getElementById("inputSize");
const btnText = document.getElementById("btnText");
const btnColor = document.getElementById("btnColor");
const btnSize = document.getElementById("btnSize");
const btnToggleMode = document.getElementById("btnToggleMode");

let isDarkMode = false;


btnText.addEventListener("click", () => {
    outputText.textContent = inputText.value || "შეიყვანე ტექსტი";
});


btnColor.addEventListener("input", () => {
    outputText.style.color = inputColor.value;
});


btnSize.addEventListener("input", () => {
    outputText.style.fontSize = `${inputSize.value}px`;
});


btnToggleMode.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
});
