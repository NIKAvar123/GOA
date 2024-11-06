// script.js

document.getElementById('textButton').addEventListener('click', function() {
    const text = document.getElementById('inputText').value;
    document.getElementById('output').textContent = text;
});

document.getElementById('colorButton').addEventListener('click', function() {
    const color = document.getElementById('colorPicker').value;
    document.getElementById('output').style.color = color;
});

document.getElementById('sizeButton').addEventListener('click', function() {
    const size = document.getElementById('fontSize').value;
    document.getElementById('output').style.fontSize = size + 'px';
});

document.getElementById('themeSwitcher').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
});

// Default to light mode
document.body.classList.add('light-mode');

