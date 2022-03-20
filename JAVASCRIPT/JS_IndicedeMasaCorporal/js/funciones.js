function calcular (op) {
    var peso = parseInt(document.getElementById("peso").value);
    var altura = parseInt(document.getElementById("altura").value);
    var resultado = "";
    var imc = peso / Math.pow(altura, 2);

    alert(imc)

    var texto = "";

    if (imc < 18.5) {
        texto = "Peso insuficiente";
    } else if (imc >= 18.5 && imc <= 24.9) {
        texto = "Normopeso"
    } 
   
    document.getElementById("resultado").value = texto;
}
