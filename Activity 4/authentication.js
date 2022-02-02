
let a = document.getElementById("newform");
let b = document.getElementById("rightpart");
let c = document.getElementById("leftpart");


function Login() {
    a.style.visibility = "hidden";
    b.style.visibility = "hidden";
    c.style.visibility = "visible";
}

function Register() {
    a.style.visibility = "visible";
    b.style.visibility = "visible";
    c.style.visibility = "hidden";
}