<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables</title>
</head>
<body>
    <?php
        //MUY IMPORTANTE LOS PUNTO Y COMA ; MUY SENSIBLE
        //Imprimir texto en la web con echo o print
        echo "Hola";
        echo "<b>Hola a todos</b>";
        print "<p>Hola</p>\n"; /*Barra n es como un br sólo print*/
        //declarar variable
        $saludo = "Hola";
        echo $saludo;
        echo "<br>Mensaje: " . $saludo . ". Fin del mensaje</br>";
        //Con el punto podemos concatenar
        $a = 8;
        $b = 2;
        $c = 2;
        echo $a + $b;
        echo "<br>";
        $resultado = $a - $b;
        echo $resultado;
        /*$a = $a + 1 es lo mismo que $a++;
        $a = $a - 1 es lo mismo que $a--;
        $a = $a *2 es lo mismo que $a *= 2;
        */
        //Declarar lista
        $tabla = ["valor1", "valor2"];
        $tabla2 = [["v1", "v2"],["v3", "v4"]];
        $correcto = true;
        
    ?>
    <?php
        echo "<br>" . $tabla[1];
        echo "<br>" . $tabla2[1][0];

        if($correcto) {
            print "<p>Es correcto</p>";
        } else {
            print "<p>No es correcto</p>";
        }
        //Así se contatenan valores de la tabla
        print $tabla[0] . " - " . $tabla[1] . " ";
        $tabla[] = "valor3";
        print $tabla[2];
        //Añadir un valor
        //Borrar un valor con unset
        unset($tabla[2]);
        /* print $tabla[2]; da error porque el valor lo hemos borrado */
        //Número de elementos
        echo "</br> Nº de elementos: "; 
        echo count($tabla);
        $numeros = [1,5,8,2,9];
        echo "</br>Mínimo: " . min($numeros);
        echo "</br>Máximo: " . max($numeros);

        //sort para ordenar
        sort($numeros);
        //imprimir tabla entera. La tabla es una suma de variables
        echo "</br>";
        print_r($numeros);

        if (in_array(8, $numeros)) {
            print "\nEstá";
        } else {
            print "\nNo está";
        }
        echo "</br>";
        array_rand($numeros);
        print_r($numeros);

        /*Existen dos tipos de elementos de almacenamiento de información: Variables y constantes
        Las constantes son variables con valor que se puede trabajar pero su valor no se
        puede modificar como en las variables. Las constantes van siempre en mayúscula, se
        declaran por su nombre en mayúsculas.
        */
        define("PI", 3.14);
        echo "</br>" . PI;
        //Hay constantes predefinidas ya por el lenguaje, por ejemplo:
        print "<br>" . PHP_INT_MAX;


        print "<pre>";
        print_r(get_defined_constants());
        print "</pre>";

    ?>
    </br>
    <?=$saludo ?>
    <!-- De esta forma se puede declarar la variable de forma
    aislada, el igual actúa como echo !-->

</body>
</html>