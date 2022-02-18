
/*fotos*/
var xxx = document.querySelector('#xxx')
function foto() {
fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
console.log(data.results['0'])
xxx.innerHTML = `
<img src="${data.results['0'].picture.large}"
width="100px" class="img-fluid rounded-circle">
<p>Nombre: ${data.results['0'].name.last}</p>
`
})
}

/*boton enviar*/
function enviar() {
    var nombre = document.getElementById('nom').value;
    var apellido = document.getElementById('cognom').value;
    var edad = document.getElementById('edad').value;

        if (document.getElementById('edad').value >= 18) {
            window.open('./web/trivial.htm')
        }
        else {
            alert("No puedes entrar!");
        }
            localStorage.setItem("nom",document.querySelector('#nom').value );
            localStorage.setItem("cognom",document.querySelector('#cognom').value );
            localStorage.setItem("edad",document.querySelector('#edad').value );
}

/*autocompletar*/
function login() {
    document.querySelector('#nom').value = localStorage.getItem('nom');
    document.querySelector('#cognom').value = localStorage.getItem('cognom');
    document.querySelector('#edad').value = localStorage.getItem('edad');
    var edad = document.querySelector("#edad").value;
    if (edad >= 18){ 
        window.open('./web/trivial.htm');
    } else {
        alert("No se ha autocompletado porque eres menor de edad!")
    }
}

 /*RESPUESTAS*/
function validar() {
    var rp1 = "Gepardo"
    var rp2 = "Arañas"
    var rp3 = "El laurel"
    var rp4 = "Huevos"
    var rp5 = "Groenlandia"

    localStorage.setItem("Resp1","Gepardo");
        document.querySelector("#respuesta1").value = localStorage.getItem("Resp1");
        document.getElementById('respuesta1').innerHTML = rp1

        localStorage.setItem("Resp2","Arañas");
        document.querySelector("#respuesta2").value = localStorage.getItem("Resp2");
        document.getElementById('respuesta2').innerHTML = rp2

        localStorage.setItem("Resp3","El laurel");
        document.querySelector("#respuesta3").value = localStorage.getItem("Resp3");
        document.getElementById('respuesta3').innerHTML = rp3

        localStorage.setItem("Resp4","Huevos");
        document.querySelector("#respuesta4").value = localStorage.getItem("Resp4");
        document.getElementById('respuesta4').innerHTML = rp4

        localStorage.setItem("Resp5","Groenlandia");
        document.querySelector("#respuesta5").value = localStorage.getItem("Resp5");
        document.getElementById('respuesta5').innerHTML = rp5
    } 


  








