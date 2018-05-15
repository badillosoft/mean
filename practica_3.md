# Práctica III - Buscador de imágenes

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

En está práctica vamos a construir un buscador de imágenes partiendo de una carpeta dada, listando sus archivos y explorando las subcarpetas, nos enfocaremos en un sólo tipo de extensión de imágenes por ejemplo `png`.

La idea es abrir una carpeta y listar sus archivos y sub-carpetas, si es de tipo archivo, deberemos checar si termina en `.png`, y si es carpeta deberemos repetir la misma tarea de buscar imágenes pero ahora partiendo de la subcarpeta.

## Listar los archivos en una carpeta

Para listar los archivos en una carpeta utilizaremos el módulo `fs`.

~~~js
const fs = require("fs");

const files = fs.readdirSync("/Users/kmmx");

console.log(files);
~~~

El método `readdirSync` lee un directorio y lista sus archivos y carpetas indistintamente, por lo que recibimos un arreglo de cadenas donde cada cadena es el nombre de un archivo o carpeta en el directorio principal.

## Checar si una ruta es archivo o carpeta

Vamos a comprobar si una ruta se trata de un archivo o una carpeta.

~~~js
const fs = require("fs");

const files = fs.readdirSync("/Users/kmmx");

for (let nombre of files) {
    let ruta = `/Users/kmmx/${nombre}`;

    let stats = fs.statSync(ruta);

    if (stats.isFile()) {
        console.log(`${ruta} es archivo`);
    }

    if (stats.isDirectory()) {
        console.log(`${ruta} es carpeta`);
    }
}
~~~

## Checar si los archivos son imágenes `.png`

Para checar si el archivo termina en cierta extensión podemos usar una expresión regular para determinar que el archivo acabe en `png`. La expresión regular es `/png$/` que significa que contenga las letras exactas `png` antes del fin de cadena (indicado por `$`). El ponerlo entre `/·/` significa que es una expresión regular.

~~~js
const nombre_archivo = "mi_imagen.png";

if (nombre_archivo.match(/png$/)) {
    console.log("Es una imágen");
}
~~~

Uniendo lo anterior:

~~~js
const fs = require("fs");

const files = fs.readdirSync("/Users/kmmx");

for (let nombre of files) {
    let ruta = `/Users/kmmx/${nombre}`;

    let stats = fs.statSync(ruta);

    if (stats.isFile()) {
        if (nombre.match(/png$/)) {
            console.log(`IMAGEN: ${ruta}`);
        }
    }

    if (stats.isDirectory()) {
        console.log(`${ruta} es carpeta`);
    }
}
~~~

## Recursividad

Finalmente tenemos que crear una función recursiva que se mande a llamar para cada directorio y busque las imágenes:

~~~js
const fs = require("fs");

function buscar_imagenes(directorio) {
    const files = fs.readdirSync(directorio);

    for (let nombre of files) {
        let ruta = `${directorio}/${nombre}`;

        try {
            let stats = fs.statSync(ruta);

            if (stats.isFile()) {
                if (nombre.match(/png$/)) {
                    console.log(ruta);
                }
            }

            if (stats.isDirectory()) {
                // HACEMOS LA RECURSIVIDAD, ES DECIR,
                // VOLVEMOS A LLAMAR AL MISMO MÉTODO PERO AHORA EN LA SUBCARPETA
                buscar_imagenes(ruta);
            }
        } catch(err) {
            //
        }
    }
}

buscar_imagenes("/Users/kmmx");
~~~

Observa que si la ruta es una carpeta volvemos a llamar al método `buscar_imagenes` ahora en esa ruta. Cada que la función encuentre un archivo con extensión `png` imprimirá su ruta en la consola.

## Ejercicios

* Agrega un callback al método `buscar_imagenes` para mandarlo a llamar cada que encuentre una imágen.

* Modifica el programa para guardar todas las rutas encontradas en un archivo de texto plano.

## Más allá

En un futuro podrías investigar como construir un archivo `zip` para comprimir todas las imágenes encontradas y enviarlas por internet.