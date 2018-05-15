# Práctica V - MongoDB con NodeJS

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Vamos a aprender a conectar `MongoDB` a `NodeJS`. Para esto necesitaremos instalar el módulo `mongodb` mediante el instalador de paquetes `npm` y posteriormente realizar la conexión al cliente, recuperar la base de datos, acceder a una colección y realizar una consulta.

Documentación: http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

## Instalar el módulo `mongodb`

Vamos a ejecutar en una terminal `npm i mongodb` o completo `npm install mongodb` lo cuál creara la carpeta `node_modules` en la raíz del proyecto. Esta carpeta contendrá todos los archivos del módulo y sus dependencias, si queremos instalar de manera global haremos `npm i -g mongodb` y posteriormente `npm link mongodb` el primer comando instalará el módulo `mongodb` de forma global y el segundo lo enlazará a nuestro proyecto.

## Crear una conexión a la base de datos

Para conectarnos utilizaremos la clase `MongoClient` la cual posee el método `connect`.

~~~js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", (err, conn) => {
    if (err) {
        console.log(err);
        return;
    }

    // TODO: La conexión está abierta

    conn.close();
});
~~~

Observa que en el primer parámetro definimos la ruta de conexión `mongodb://localhost:27017` y como segundo parámetro mandamos un callback que recibe si hubo error y la conexión.

## Obtener la base de datos y la colección

Vamos a conectarnos a una base de datos específica, recordando que si no existe la crea, lo mismo para la colección:

~~~js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        console.log(err);
        return;
    }

    const db = client.db("mean");

    const coll = db.collection("clientes");

    console.log(coll);

    client.close();
});
~~~

## Insertar documentos

Recordemos que un documento es un fragmento `json`. Recuerda no cerrar el cliente hasta que todas las operaciones esten realizadas.

~~~js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        console.log(err);
        return;
    }

    const db = client.db("mean");

    const coll = db.collection("clientes");

    const doc = { nombre: "Ana", email: "ana@gmail.com" };

    coll.insertOne(doc, (err, result) => {
        if (err) {
            console.log("Hubo un error al insertar el documento:", err);
            return;
        }
        console.log("Documento insertado");

        // YA PODEMOS CERRAR LA CONEXIÓN
        client.close();
    });
});
~~~

## Buscar documentos

Podemos buscar documentos mediante el cursor.

~~~js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        console.log(err);
        return;
    }

    const db = client.db("mean");

    const coll = db.collection("clientes");

    const query = {};

    coll.find(query).toArray((err, docs) => {
        if (err) {
            console.log("Hubo un error realizar la busqueda:", err);
            return;
        }
        
        console.log(docs);

        // YA PODEMOS CERRAR LA CONEXIÓN
        client.close();
    });
});
~~~

## Ejercicios

* Crea un programa basado en la función `buscar_imagenes()` de la `Práctica III` que guarde cada una de las rutas que encuentre en la colección `imagenes` formando un documento como el que se muestra:

~~~json
{
    "_id": "9488a4fa78b81",
    "ruta": "/Users/kmmx/Desktop/feed-news/node_modules/boom/images/boom.png",
    "extension": "png"
}
~~~

Genera `_id` con un nombre aleatorio cómo en la `Práctica IV`