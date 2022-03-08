function iniciar() {
    /*alert(document.getElementById("usuario").value);
    var usu = prompt("Introduzca nombre:");
    alert("Hola " + usu + " que pasa");*/

   /* var usu = prompt("Introduzca nombre:");
    document.getElementById("texto").innerHTML = "Hola " + usu + "<br/>";
    document.getElementById("texto").style = "font-weight: bold";
}
    
function mostrarMensaje() {
    /*document.getElementById("texto").innerHTML = "Hola "; 
    document.getElementById("texto").className = "bordeYcolor";
    document.querySelector("#principal p:first-child").onclick = alerta*/
    var coleccion = document.querySelectorAll("#principal p");
    var coleccion = document.getElementById("principal").querySelectorAll("p")
    for (let i = 0; i < coleccion.length; i++) {
        coleccion[i].innerHTML ="P " + (i+1);
    }

function alerta () {
    alert("ALERTA");
}

function ocultar {
    document.getElementById("principal").style = "display: none";
}

window.addEventListener("load",iniciar,false);

