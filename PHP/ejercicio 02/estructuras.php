<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estructuras</title>
    <style>
        .rojo {
            color:red;
        }
        .verde {
            color:green;
        }
        .azul {
            color:blue;
        }
        table, tr, td {
            border: 2px solid black
        }
    </style>
</head>
<body>
    
<?php
    $al = rand(1,10);
 //   echo $al
//Al refrescar devuelve un número aleatorio
    if ($al < 5) {
        echo "<p class='rojo'>El valor $al es menor que 5</p>";
    }  else if ($al > 5) {
        echo "<p class='azul'>El valor $al es mayor que 5";
    } else {
        echo "<p class='verde'>El valor $al es 5";
    }
//con estas funciones cambia de color y hace el echo

// tres partes del for: iniciación de la variable, condición de salida y 
for ($i=0; $i < 6; $i++) { 
    echo "<p>$i</p>";
}
// en este bucle no llega a 6 pq es menor estricto
// Para hacerlo de dos en dos o de tres en tres
// for ($i=0; $i < 6; $i = $i +2,3,4 o lo q sea) { 
//    echo "<p>$i</p>"; }

/* al revés 
for ($i=6; $i > 0; $i--) { 
    echo "<p>$i</p>";
}*/

//así sería al revés por pares
for ($i=6; $i > 0; $i--) { 
    if ($i % 2 == 0) {
        echo "<p>$i<p>";
    }
}

$filas = 3;
$columnas = 4;

//tabla de dos filas por cuatro columnas con bucle for
echo "<table>";
for ($i=0; $i < $filas; $i++) { 
    echo "<tr>"; //para que cree la fila
    for ($j=0; $j < $columnas; $j++) { 
        echo "<td>$i-$j</td>";
    }
    echo "</tr>"; //para que cierre
}   
echo "</table";    

//ejercicio: un alert con bdías, bnoches, etc
// que dependa de la hora; sacar con la función date

$hora = date("H");
echo "$hora";
if ()

?>    

</body>
</html>