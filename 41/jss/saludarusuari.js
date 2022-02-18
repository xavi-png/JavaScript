function enviarSalutacio() {
    var nom = document.getElementById("nom").value;
    var cognom = document.getElementById("cognom").value;
   document.getElementById("salutacio").innerHTML = 
   "HOLA "+nom+" "+cognom+", GRACIES PER OMPLIR EL FORMULARI";


}