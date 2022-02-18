function encender(bombilla) {
    bombilla.src="img/llumon.gif"
}

function romper(bombilla) {
    bombilla.src="img/llumbreak.gif"
}

function apagar(bombilla) {
    bombilla.src="img/llumoff.gif"
}

//numeros
//numeros sacados de https://keycode.info/

document.addEventListener("keydown", numeros);
function numeros (num) {
    if(num.keyCode == 49) {
        document.getElementById('b1').src = "img/llumon.gif";
    }else {
        document.getElementById('b1').src = "img/llumoff.gif";
    }

    if(num.keyCode == 50) {
        document.getElementById('b2').src = "img/llumon.gif";
    }else {
        document.getElementById('b2').src = "img/llumoff.gif";
    }

    if(num.keyCode == 51) {
        document.getElementById('b3').src = "img/llumon.gif";
    }else {
        document.getElementById('b3').src = "img/llumoff.gif";
    }
} 