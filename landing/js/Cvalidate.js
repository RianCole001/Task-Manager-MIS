function validateUsername() {
  const username = document.getElementById("username").value.trim();
  document.getElementById("usernameError").textContent =
    username.length === 0 ? "Username is required." : "";
}

function validateEmail() {
  const email = document.getElementById("userEmail").value.trim();
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  document.getElementById("emailError").textContent =
    !pattern.test(email) ? "Enter a valid email." : "";
}

function validatePassword() {
  const password = document.getElementById("password").value;
  document.getElementById("passwordError").textContent =
    password.length < 6 ? "Password must be at least 6 characters." : "";
  validateConfirmPassword(); // Keep confirm in sync
}

function validateConfirmPassword() {

  const confirm = document.getElementById("confirmPassword").value;
  document.getElementById("confirmError").textContent =
    confirm !== password ? "Passwords do not match." : "";
}
