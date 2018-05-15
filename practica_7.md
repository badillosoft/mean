# Práctica VII - Módulos

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Hasta ahora reutilizar código se ha vuelto un poco díficil, por lo que en esta práctica vamos a ver cómo crear módulos para que las cosas funcionen de manera más fácil.

## Exportar funcionalidad

Cualquier archivo de javascript puede ser tratado como un módulo. La variable `module.exports` definida globalmente nos permite exportar cualquier cosa que contenga y podrá ser utilizada en otro archivo mediante `require()`. Por ejemplo:

> `mi_modulo.js`

~~~js
module.exports = 123;
~~~

> `test.js`

~~~js
const modulo = require("./mi_modulo");

console.log(modulo); // imprime 123
~~~

Observa que no es necesario colocar la extensión `.js` al cargar el módulo mediante `require("./mi_modulo")` pero si es necesario anteponer `./` antes del nombre del archivo.

Podemos exportar un objeto o una función también.

> `mi_modulo.js`

~~~js
module.exports = {
    mensaje: "Hola",
    saludar() {
        console.log(`Mensaje: ${this.mensaje}`);
    }
};
~~~

> `test.js`

~~~js
const modulo = require("./mi_modulo");

console.log(modulo.mensaje); // imprime "Hola"

modulo.saludar(); // imprime "Mensaje: Hola"
~~~

## Módulo para manejar fácilmente MongoDB

Vamos a mostrar como crear un módulo sencillo para controlar internamente `mongo` para facilitar las operaciones.

> `mongox.js`

~~~js
const MongoClient = require("mongodb").MongoClient;

module.exports = {
    client: null,
    conectar(callback) {
        MongoClient.connect("mongodb://localhost:27017", (err, client) => {
            if(err) {
                console.log(err);
                return;
            }

            console.log("Conectado a MongoDB");

            this.client = client;

            callback();
        });
    },
    desconectar() {
        if (!this.client) {
            console.log("No hay conexión");
            return;
        }
        this.client.close();
    },
    buscar(dbname, collname, query, callback) {
        if (!this.client) {
            console.log("No hay conexión");
            return;
        }

        const db = this.client.db(dbname);

        const coll = db.collection(collname);

        coll.find(query).toArray((err, docs) => {
            if (err) {
                console.log("Error en la búsqueda:", err);
                return;
            }

            callback(docs);
        });
    },
};
~~~

Vamos a probar el módulo:

> `test.js`

~~~js
const mongox = require("./mongox");

mongox.conectar(() => {
    const dbname = "mean";
    const collname = "clientes";
    const query = { nombre: "Ana" };

    mongox.buscar(dbname, collname, query, (clientes) => {
        console.log(clientes);
        mongox.desconectar();
    });
});
~~~

## Ejercicios

* Agrega un método al módulo `mongox` para insertar un documento y prueba que funcione en otro archivo.

* Crea un módulo llamado `imgutil` que exponga el método para buscar imágenes y pruebalo en otro archivo.