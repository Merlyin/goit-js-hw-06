const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailVal = event.target.elements.email.value;
    const passwordVal = event.target.elements.password.value;

    if(emailVal === ""){
        alert("Enter an email address!");
    } else if (passwordVal === "") {
        alert("Enter a valid password!");
    }

    console.log("Email: " + emailVal + ". Password: " + passwordVal + ".");
    loginForm.reset();
});

