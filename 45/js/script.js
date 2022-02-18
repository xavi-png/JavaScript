function comprovar() {
    if (document.querySelector("#user").value == localStorage.getItem("user")){
    if (document.querySelector("#pass1").value == localStorage.getItem("pass1")){
    if (document.querySelector("#pass2").value == localStorage.getItem("pass2")){
        alert ("Endevant");
    }else {
        alert ("correcte");
        }
    } else {
        alert ("aaaa");
        }
    } else {
        alert ("La contraseña no coincide");
        }
    }