# Práctica IV - Copiador de archivos

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

En esta práctica vamos a crear un programa que nos ayude a realizar tareas de automatización como es el caso de copiar una gran cantidad de archivos dentro de una carpeta dada.

La idea es listar los archivos que queremos copiar dentro de un archivo de texto plano, en donde cada línea del archivo será la ruta del archivo a copiar. El programa deberá tomar cada ruta del archivo y generar un nombre aleatorio para el nuevo archivo, recuperando su extensión e integrandola en el nombre del archivo. Luego deberemos copiar el archivo haciendo uso del módulo `fs` con el método `copyFileSync`.

## Leer el archivo de las rutas

El archivo de las rutas será un archivo de texto plano como el siguiente:

> `rutas.txt`

~~~txt
/Users/kmmx/Desktop/feed-news/node_modules/boom/images/boom.png
/Users/kmmx/Desktop/feed-news/node_modules/directory-encoder/test/directory-files/dog.png
/Users/kmmx/Desktop/feed-news/node_modules/directory-encoder/test/files/bear copy.png
/Users/kmmx/Desktop/feed-news/node_modules/directory-encoder/test/files/cat.png
/Users/kmmx/Desktop/feed-news/node_modules/firebase/node_modules/hoek/images/hoek.png
/Users/kmmx/Desktop/feed-news/node_modules/firebase/node_modules/joi/images/joi.png
/Users/kmmx/Desktop/feed-news/node_modules/firebase/node_modules/joi/images/validation.png
/Users/kmmx/Desktop/feed-news/node_modules/fsevents/node_modules/boom/images/boom.png
/Users/kmmx/Desktop/feed-news/node_modules/fsevents/node_modules/hawk/images/hawk.png
~~~

Para abrirlo en forma síncrona haremos:

~~~js
const fs = require("fs");

const rutas = fs.readFileSync("./rutas.txt", "utf-8").split("\n");

console.log(rutas);
~~~

Observa que estamos leyendo el contenido del archivo de forma síncrona y partiendo el texto por salto de línea, por lo que rutas será un arreglo con cada una de las rutas en el archivo (intenta no dejar líneas vacías).

## Recuperar la extensión del archivo

Para obtener la extensión del archivo utilizaremos nuevamente una expresión regular que atrape el nombre de la extensión:

~~~js
const nombre_original = "/Users/kmmx/Desktop/feed-news/node_modules/boom/images/boom.png";

const extension = nombre_original.match(/\w+$/)[0];

console.log("Extensión:", extension);
~~~

La expresión regular busca todas los caracteres alfanuméricos antes de acabar la cadena, en este caso, todos los caracteres alfanuméricos después del último punto hasta el final de la cadena.

## Generar un nombre aletorio

Podemos generar una cadena aleatoria de la siguiente forma:

~~~js
const nombre_aleatorio = Math.random().toString(16).slice(2);

console.log(nombre_aleatorio);
~~~

## Copiar cada archivo en la carpeta dada

Para utilizar `fs.copyFileSync()` sólo tenemos que poner la ruta del archivo original y la ruta destino con el nuevo nombre.

~~~js
const origen = "/Users/kmmx/Desktop/feed-news/node_modules/boom/images/boom.png";
const destino = "./backup/9488a4fa78b81.png";

fs.copyFileSync(origen, destino);
~~~

No olvides checar que la carpeta `./backup` exista.

## Ejercicios

* Integra todas las piezas descritas anteriormente para leer cada una de las rutas de los archivos a copiar, luego extrar la extensión, generar un nombre aleatorio, ponerle la extensión al nombre aleatorio y copiar el archivo de la ruta original a la ruta `./backup/XXXX.YYY`.