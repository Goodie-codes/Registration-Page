let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let title = document.getElementById("title")
let NameField = document.getElementById("NameField")

signinBtn.onclick = function() {
    NameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    NameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}