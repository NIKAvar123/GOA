toggleMode.addEventListener('click', () => {
    if (document.body.classList.contain('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } 
    else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
});




for (let i = 100; i <= 1000; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
