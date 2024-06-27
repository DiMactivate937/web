function showPasswordPrompt() {
    var password = prompt("Enter password:");
    if (password !== null) {
        checkPassword(password);
    }
}

function checkPassword(password) {
    var errorMessage = document.getElementById('error-message');
    var encodedPassword = "bWVsbG9u";
    var encodedUrl = "bWVsbG9uLmh0bWw=";

    if (btoa(password) === encodedPassword) {
        window.location.href = atob(encodedUrl);
    } else {
        errorMessage.textContent = "Woah, failed already? It was more than obvious...";
    }
}
