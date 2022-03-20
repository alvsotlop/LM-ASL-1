function iniciar() {
    var capa = document.getElementById ("capa");
    var texto = document.getElementById ("texto");
    var titulo = document.getElementById ("titulo");

    if (capa.classList.contains("success")) {
        titulo.innerHTML="CORRECTO";
        texto.innerHTML="Los datos son correctos";
    } else if (capa.classList.contains("error")) {
        titulo.innerHTML="ERROR";
        texto.innerHTML="Ha surgido un error";
    } else if (capa.classList.contains("warning")) {
        titulo.innerHTML="WARNING";
        texto.innerHTML="Tenga cuidado";
    }
}
window.addEventListener("load", iniciar, false);
    