let intervalId;
const output = document.getElementById('output');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', () => {
    const choice = document.querySelector('input[name="choice"]:checked').value;
    startBtn.disabled = true;
    stopBtn.disabled = false;

    intervalId = setInterval(() => {
        if (choice === 'number') {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            output.textContent = randomNumber;
        } 
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});