

function mostrarError(nombreSpan, mensaje) {
    document.getElementById(nombreSpan).innerHTML = mensaje;
}

function borrarError(nombreSpan) {
    document.getElementById(nombreSpan).innerHTML = "";
}

function validarFormulario() {
    var cadenaError = "";

    var texto = document.getElementById("texto");
    if (texto.value == null || texto.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: texto vacío</li>";
    } else if (texto.value.length < 5) {
        cadenaError = cadenaError +"<li>Error: texto de menos de 5 caracteres"
    }

    var tel = document.getElementById("telefono");
    if (tel.value == null || tel.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: teléfono vacío</li>";
    } else if (tel.value.length != 9) {
        cadenaError = cadenaError + "<li>Error: teléfono de 9 cifras</li>";
    } else if (!tel.value.startsWith(9) && !tel.value.startsWith(6)) {
        cadenaError = cadenaError + "<li>Error: teléfono 9 o 6</li>";
    }

    var web = document.getElementById("web");
    if (web.value == null || web.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: web vacía</li>";
    } else if (!web.value.endsWith('.es')) {
        cadenaError = cadenaError +"<li>Error: la web debe acabar en .es"
    } else if (!web.value.startsWith('www')) {
        cadenaError = cadenaError +"<li>Error: la web debe empezar por www"
    }



    if (cadenaError.length == 0) {
        return true;
    } else {
        document.getElementById("capaerrores").style.visibility = "visible";
        mostrarError("sperrores", cadenaError);
        return false;
    }

    
}

function calcular (op) {
    var viaje = document.getElementById("viaje").value;
    var km = parseInt(document.getElementById("km").value);
    var precio = parseInt(document.getElementById("precio").value);
    var calculo = km * precio
    texto = "El viaje " + viaje + " cuesta " + calculo 
    document.getElementById("resultado").innerHTML = texto;

}

function cambiar() {

    document.getElementById("enlaceuno").className = "negrita";
    document.getElementById("enlacedos").className = "grande";
    document.getElementById("enlacetres").className = "color";


}



    
