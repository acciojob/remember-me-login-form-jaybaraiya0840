//your JS code here. If required.
// Get elements
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("checkbox");
const existingUserButton = document.getElementById("existing");

// Check if credentials are stored
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existingUserButton.style.display = "block";
}

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (rememberMeCheckbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

// Handle existing user login
existingUserButton.addEventListener("click", function () {
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
