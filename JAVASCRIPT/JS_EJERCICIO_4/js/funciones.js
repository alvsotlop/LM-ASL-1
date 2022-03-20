function comprobar() {

    var uno = parseInt(document.getElementById("uno").value);
    var dos= parseInt(document.getElementById("dos").value);
    var resultado ="";
    
    if ( uno > dos) {
        resultado = uno + " es mayor que " + dos;
    } else if ( dos > uno) {
        resultado = dos + " es mayor que " + uno;
    } else { 
        resultado = uno + " es igual a" + dos;
    }
    document.getElementById("resultado").innerHTML = resultado;

}

function calcularotro() {
    var one = parseInt(document.getElementById("one").value);
    var two = parseInt(document.getElementById("two").value);
    var three = parseInt(document.getElementById("three").value);
    
    var mayor = ""; 
    var central = "";
    var menor = "";
    /* de mi forma solo usamos var resultado */
    var resultado =""; 

    /*if (one > two && two > three)  {
        resultado = " El mayor es " + one + " , el mediano " + two + " y el menor es " + three;
    } else if (two > three && three > one){
        resultado = " El mayor es " + two + " , el mediano " + three + " y el menor es " + one;
    } else if (three > one && one > two){
        resultado = " El mayor es " + three + " , el mediano " + one + " y el menor es " + two;
    } else if (three > two && two > one){
        resultado = " El mayor es " + three + " , el mediano " + two + " y el menor es " + one;
    } else if (one > three && three > two){
        resultado = " El mayor es " + three + " , el mediano " + one + " y el menor es " + two;
    } else if (two > one && one > three){
        resultado = " El mayor es " + two + " , el mediano " + one + " y el menor es " + three;
    } */
    

    document.getElementById("result").innerHTML = resultado; 
}

function repeti() {
    var frase =document.getElementById("frase").value;
    var num = parseInt(document.getElementById("valor").value);
    var resultado= "";

    for (let i = 0; i < num; i++) {
        resultado = resultado + (I+1) + " . " frase + "<br>";
    }
        
    document.getElementById("res2").innerHTML = resultado;
}
