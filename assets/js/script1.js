function showPasswordPopup() {
            var passwordPopup = document.getElementById('password-popup');
            passwordPopup.style.display = 'block';
        }

function checkPassword() {
	var password = document.getElementById('password').value;
	var errorMessage = document.getElementById('error-message');

	if (btoa(password) === "bWVsbG9u") {
		window.location.href = atob("bWVsbG9uLmh0bWw=");
	} else {
		errorMessage.textContent = "Woah, failed already? It was more than obvious...";
	}
}
