
let password1 = document.getElementById('password1')

function genPass(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLength = 16;
    let passWord = ''
    for(let j = 0; j<=passLength; j++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        passWord += chars.substring(randomNumber, randomNumber +1);
    }
    password1.value = passWord
}

function copyPass(){
    var copyText = document.getElementById("password1");
    copyText.setSelectionRange(0, 999);
    navigator.clipboard.writeText(copyText.value);
}