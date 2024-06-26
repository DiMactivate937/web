function showPasswordInput() {
    var passwordContainer = document.getElementById('password-container');
    passwordContainer.style.display = 'block';
}

function checkPassword() {
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var encodedPassword = btoa("mellon"); // Encode the correct password
    if (btoa(password) === encodedPassword) {
        window.location.href = "../pages/mellon.html";
    } else {
        errorMessage.textContent = "Woah, failed at something so simple? This wasn't even a riddle.";
    }
}
