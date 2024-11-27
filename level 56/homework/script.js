document.getElementById("loginButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.innerText = "";

    if (!email) {
        errorMessage.innerText = "Please enter your email.";
        return;
    }

    if (!validatePassword(password)) {
        errorMessage.innerText = "Password must be at least 8 characters, contain one uppercase, one number, and one special character.";
        return;
    }

    if (!terms) {
        errorMessage.innerText = "Please accept the terms and conditions.";
        return;
    }

    const proceed = confirm("Would you like to enable dark mode?");
    if (proceed) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    }

    window.location.href = "programmers.html";
});

function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
