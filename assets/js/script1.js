function showPasswordPopup() {
    var passwordPopup = document.getElementById('password-popup');
    passwordPopup.style.display = 'block';
}

function checkPassword() {
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var encodedPassword = btoa("mellon"); // Encode the correct password
    if (btoa(password) === encodedPassword) {
        window.location.href = "../pages/mellon.html";
    } else {
        errorMessage.textContent = "Wrong password. Try again.";
    }
}