function showLogin(){
    document.getElementById("loginContainer").classList.remove("hidden");
    document.getElementById("registerContainer").classList.add("hidden");
}

function closeLogin(){
    document.getElementById("loginContainer").classList.add("hidden");
}

function showRegister(){
    document.getElementById("registerContainer").classList.remove("hidden");
    document.getElementById("loginContainer").classList.add("hidden");
}

function closeRegister(){
    document.getElementById("registerContainer").classList.add("hidden");
}

