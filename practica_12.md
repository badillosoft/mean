# Práctica XII - Fetch (consumir otros servicios)

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Hay veces en que será necesario consumir un `API REST` ya construido en algún otro servidor, para esto podemos utilizar el módulo `node-fetch` que funciona de manera a la función nativa `fetch` de javascript para exploradores. El módulo `fetch` funciona mediante promesas y su estructura es similar a realizar una petición `ajax`.

Intalaremos `npm i node-fetch` antes que nada.

## Consumir un servicio GET

Para consumir un api `GET url` simplemente hacemos:

~~~js
const fetch = require("node-fetch");

fetch("http://localhost:3000/api/usuario?token=abc123")
    .then(response => {
        if (response.status !== 200) {
            return response.text().then(err => Promise.reject(err));
        }
        return response.json();
    })
    .then(result => {
        console.log("RESULTADO:", result);
    })
    .catch(err => {
        console.log("ERROR:", err);
    });
~~~

## Consumir un servicio POST

Para consumir un api `POST url` simplemente hacemos:

~~~js
const fetch = require("node-fetch");

const options = {
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        token: "xyz456"
    })
};

fetch("http://localhost:3000/auth/token", options)
    .then(response => {
        if (response.status !== 200) {
            return response.text().then(err => Promise.reject(err));
        }
        return response.json();
    })
    .then(result => {
        console.log("RESULTADO:", result);
    })
    .catch(err => {
        console.log("ERROR:", err);
    });
~~~

Observa que en la respuesta checamos que el estatus sea `200` para obtener el `json` de otra forma obtenemos el `texto` y generamos un error.