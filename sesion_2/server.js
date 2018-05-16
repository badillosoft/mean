// importar los módulos necesarios
const http = require("http");
const express = require("express");

// crear la instancia de *express*
const app = express();

// agregar una ruta de tipo GET en el path /api/cliente/saludar
app.get("/api/cliente/saludar", (req, res) => {
    res.send({
        mensaje: "Hola mundo",
        fecha: new Date()
    });
});

// montar el servidor
http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});