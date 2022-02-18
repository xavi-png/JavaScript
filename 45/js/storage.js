function Guardar() {
    localStorage.setItem("nom", document.querySelector("#nom").value );
    localStorage.setItem("cognom", document.querySelector("#cognom").value );
}

function Esborrar() {
    document.querySelector("#nom").value = null;
    document.querySelector("#cognom").value = null;
    document.querySelector("#user").value = null;
    document.querySelector("#pass1").value = null;

    localStorage.setItem("nom", "");
    localStorage.setItem("cognom", "");
    localStorage.setItem("user", "");
    localStorage.setItem("pass1", "");
}

function Recuperar() {
    document.querySelector("#nom").value = localStorage.getItem("nom");
    document.querySelector("#cognom").value = localStorage.getItem("cognom");
}