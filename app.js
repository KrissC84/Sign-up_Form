

const password = document.querySelector("#psw");
const con_password = document.querySelector("#con_psw");
const button1 = document.querySelector(".button");


con_password.addEventListener('keyup', passCheck)
con_password.addEventListener('click', passCheck)
password.addEventListener('keyup', passCheck)
password.addEventListener('click', passCheck)

function passCheck() {
    if (password.value == con_password.value) {
        console.log(password.value);
        con_password.classList.toggle('input_wrong');

    } else {
       con_password.classList.add('input_wrong');
        console.log(password.value);
    };
}