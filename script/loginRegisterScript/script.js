function showLogin(){
    closeRegister();
    var login_container = document.getElementById("loginContainer");
    login_container.classList.remove("hidden");
    var body = document.body;
    body.classList.add("darkMode");
}

function closeLogin(){
    var login_container = document.getElementById("loginContainer");
    login_container.classList.add("hidden");
    var body = document.body;
    body.classList.remove("darkMode");
}

function showRegister(){
    closeLogin();
    var register_container = document.getElementById("registerContainer");
    register_container.classList.remove("hidden");
    var body = document.body;
    body.classList.add("darkMode");
}

function closeRegister(){
    var register_container = document.getElementById("registerContainer");
    register_container.classList.add("hidden");
    var body = document.body;
    body.classList.remove("darkMode");
}