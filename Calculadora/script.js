const resultado = document.getElementById("resul");

function digitarN(numero){
   let n = resultado.innerHTML;
   resultado.innerHTML = n + numero;
}
function limpar(){
    resultado.innerHTML = "";
}
function apagar(){
    let resultado = document.getElementById("resul").innerHTML;
    document.getElementById("resul").innerHTML = resultado.substring(0, resultado.length -1);
}
function calc(resultado){
    var resultado = document.getElementById("resul").innerHTML;
    document.getElementById("resul").innerHTML = eval(resultado);
}