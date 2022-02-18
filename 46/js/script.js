function numero(num) {
    let inputDP = document.getElementById("resultado");
    inputDP.value = inputDP.value + num;
}
function calc() {
    let inputDP = document.getElementById("resultado");
    inputDP.value = eval (inputDP.value);
}
function limpiar() {
    let inputDP = document.getElementById("resultado");
    inputDP.value = null;
}
function limpiar1() {
    let inputBF = document.getElementById("resultado");
    let inputAF = inputBF.value.slice(0,-1);
    inputBF.value = inputAF;
}