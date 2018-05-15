# Práctica II - Uso del sistema de archivos `fs`

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Node tiene acceso al sistema de archivos mediante el módulo `fs`. Para poder acceder a él tenemos dos opciones, de forma asíncrona (mediante callbacks) y de forma síncrona. Lo primero que vamos a aprender es abrir archivos de texto plano.

Un archivo de texto plano podemos pensarlo como una cadena `string` de tamaño arbitrario, cuando cargamos el archivo todo será cargado en una variable de tipo `string`. Los saltos de línea serán caracteres más dentro de la cadena.

Para más información visita: https://nodejs.org/api/fs.html

## Leer un archivo de texto plano

~~~js
const fs = require("fs");

fs.readFile("./datos.txt", "utf-8", (err, data) => {
    if(err) {
        console.log("Hubo un error al abrir el archivo.");
        console.log(err);
        return;
    }

    console.log(data);
});
~~~

Observa que estamos llamando a la función `readFile` definida en el módulo `fs` con la ruta al archivo como primer parámetro (en este caso una ruta relativa al entorno de ejecución). El segundo parámetro especifica la codificación del archivo, generalmente usaremos `utf-8` al menos que se quiera tratar el archivo como `ascii`.

El callback de respuesta está formado por una función flecha que recibe `err` y `data`, si `err` es distinto de null significa que hubo un error, por lo que lo mostramos en la consola y salimos del callback. La variable `data` rentendrá el `string` con toda la información del archivo.

## Escribir un archivo

Para escribir un archivo deberemos usar la función `writeFile`, ajustar el primer parámetro con la ruta al achivo (si no existe lo va a crear y si ya existe lo va a reemplazar). El segundo parámetro será el contenido y como tercer parámetro pondremos un callback que indique si hubo error:

~~~js
const fs = require("fs");

fs.writeFile("./datos_out.txt", "Holaaaaa\nmundoooooo", (err) => {
    if (err) {
        console.log("Hubo un error al escribir el archivo");
        console.log(err);
        return;
    }
    console.log("Archivo escrito");
});
~~~

Observa que `\n` indica un salto de linea entre el texto `Holaaaaa` y `mundoooooo`.

## Ejercicios

* Leer un archivo de texto plano y separar sus líneas mediante `split()` (revisa las notas).
* Para cada línea en recuperada cuenta el número de caracteres.
* Guarda en un segundo archivo en una línea el número de caracteres seguido de un espacio y el contenido de la línea original (no olvides el salto de línea).