# Práctica VI - El carrito de frutas

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Vamos a crear un programa que le almacene frutas a diversos usuarios. El usuario y la fruta van a ser solicitados al usuario mediante  el módulo `readline`.

## Leer una línea desde la consola

El siguiente código muestra como leer una línea desde la consola:

~~~js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cómo te llamas? ', (respuesta) => {
    console.log(`Tú no eres ${respuesta} >:(`);
    rl.close();
});
~~~

## Pedir el usuario y la fruta y agregarla

Para agregar un elemento a un arreglo dentro de un documento deberemos usar el método `coll.updateOne()` de la colección dada.

~~~js
const MongoClient = require("mongodb").MongoClient;
const readline = require('readline');

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        console.log(err);
        return;
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Ingresa el nombre y la fruta: ', (respuesta) => {
        const [nombre, fruta] = respuesta.split(" ");
    
        console.log(`Agregando la fruta ${fruta} al cliente ${nombre}`);

        const db = client.db("mean");

        const coll = db.collection("clientes");

        const query = {
            nombre: nombre
        };

        // A la clave `frutas` le agregamos la `fruta`
        const update = {
            $push: {
                frutas: fruta
            }
        };

        coll.updateMany(query, update, (err, result) => {
            if (err) {
                console.log(err);
                rl.close();
                client.close();
                return;
            }

            console.log("Fruta agregada :)");

            rl.close();
            client.close();
        });
    });
});
~~~

Observa que mandamos a actualizar todos los documentos que coincidan en la clave nombre con el nombre ingresado y les agrega (`push`) un nuevo elemento en su clave `frutas` (si no existe la crea).

## Ejercicios

* Crea un programa que le agregue artículos comprados a un cliente.