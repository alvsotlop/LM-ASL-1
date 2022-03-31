/*
var nombre = "Álvaro Soto";
var altura = 187;
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`
;

if(altura >= 190){
    datos.innerHTML += `<h1>Eres alto</h1>`;
}else{
    datos.innerHTML += `<h1>Eres bajo</h1>`;
}

for(var i = 2000; i<=2020; i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}
*/

function MuestraMiNombre(nombre, altura){
    var MisDatos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`
;
    return MisDatos; 
}

function imprimir(){
    var datos = document.getElementById("datos")
    datos.innerHTML = MuestraMiNombre("Álvaro ", 187)
}

imprimir();

var nombres = ['Víctor', 'Antonio', 'Joaquín'];
// alert(nombres[1]);
document.write('<h1>Listado de nombres</h1>')
/*for (i = 0; i < nombres.length; i++){
    document.write(nombres[i]  + '</br>')
}*/

//length te cuenta el número de elementos. Abajo otra 

