document.getElementById("validate").addEventListener("click", validatePassword);
document.getElementById("generate").addEventListener("click", generatePassword);

function validatePassword() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  
  const regex = /^[a-zA-Z0-9_.-]{4,12}$/;
  
  if (password.length < 4 || password.length > 12) {
    message.textContent = "Password must contain 4 to 12 characters.";
    message.className = "invalid";
  } else if (/\s/.test(password)) {
    message.textContent = "Password must not contain spaces.";
    message.className = "invalid";
  } else if (!regex.test(password)) {
    message.textContent = "Password must contain only letters, numbers, _, - or . symbols.";
    message.className = "invalid";
  } else {
    message.textContent = "Password is valid!";
    message.className = "valid";
  }
}

function generatePassword() {
  const length = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.-";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
  document.getElementById("message").textContent = "A random password is generated.";
  document.getElementById("message").className = "";
}
