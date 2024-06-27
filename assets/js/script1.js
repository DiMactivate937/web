function showPasswordPopup() {
            var passwordPopup = document.getElementById('password-popup');
            passwordPopup.style.display = 'block';
        }

function checkPassword() {
	var password = document.getElementById('password').value;
	var errorMessage = document.getElementById('error-message');
	var encodedPassword = "bWVsbG9u";
	var encodedUrl = "Ym91em91a2kuaHRtbA==";

	if (btoa(password) === encodedPassword) {
		window.location.href = atob(encodedUrl);
	} else {
		errorMessage.textContent = "Woah, failed already? It was more than obvious...";
	}
}