function enviar() {
    var pw1 = document.getElementById("pw1").value;
    var pw2 = document.getElementById("pw2").value;
    var pass = "1234"
    var usr = document.getElementById("usr").value;
    var name = "Ibai";
    if (pw1 == pw2)  {
    if (pw1 == pass) {
    if (usr == name) {
        alert ("Pots entrar");
    }else{
        alert("Usuario Incorrecto");
    }
    }
    }else{
        alert("La pass no coincide");
    }
}
    


//enter para enviar formulario (NO FUNCIONA)
document.addEventListener("keydown", enter);
function enter(ent) {
if (ent.keyCode = 13 ) {
    var x = getElementById("enviar");
}
}
