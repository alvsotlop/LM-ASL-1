function suma() {
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var setinput = document.getElementById("resultado")
    var ope = numero1 + numero2
    setinput.value = ope;
}



function resta() {
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var setinput = document.getElementById("resultado")
    var ope = numero1 - numero2
    setinput.value = ope;
}



function multiplicacion() {
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var setinput = document.getElementById("resultado")
    var ope = numero1 * numero2
    setinput.value = ope;
}



function division() {
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var setinput = document.getElementById("resultado")
    var ope = numero1 / numero2
    setinput.value = ope;
}