console.log("Hi, JS connected login page");


const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

document.getElementById("login-btn").addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (username !== "admin") {
        alert("Please Enter Valid Username!");
        return;
    }
    console.log(username);

    if (password !== "admin123") {
        alert("Please Enter Valid Password!");
        return;
    }
    console.log(password);

    alert("Login Successful..\n\Press OK to go to main page.");
    window.location.assign("main.html");
})
