// Define constants and variables
const loginIcon = document.getElementById("login-icon");
const loginIconSubMenu = document.getElementById("login-icon-sub-menu");

//Functions
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

//DOM event
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Perform your AJAX/FETCH login

        setFormMessage(loginForm, "error", "invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach((inputElement) => {
        inputElement.addEventListener("blur", (e) => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });
        inputElement.addEventListener("input", (e) => {
            clearInputError(inputElement);
        });
    });

     // Add the event listener for the "contact" link
     document.getElementById("contact").addEventListener("click", function() {
        window.location.href = "contact.html";
    });
     // Add the event listener for the "explore" link
     document.getElementById("explore").addEventListener("click", function() {
        window.location.href = "explore.html";
    });

     // Add the event listener for the "about" link
     document.getElementById("about").addEventListener("click", function() {
        window.location.href = "about.html";
    });
});
