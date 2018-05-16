// importar los módulos necesarios
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

// crear la instancia de *express*
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// agregar una ruta de tipo GET en el path /api/cliente/saludar
// app.get("/api/cliente/saludar", (req, res) => {
//     res.send({
//         mensaje: "Hola mundo",
//         fecha: new Date()
//     });
// });
// app.get("/api/cliente/saludar", (req, res) => {
//     res.send(req.query);
// });
app.get("/api/cliente/saludar", (req, res) => {
    const tipo = req.query.tipo;
    
    if (tipo === "PERSONA") {
        const nombre = req.query.nombre || "ANÓNIMO";
        res.send({
            mensaje: `Hola ${nombre}`
        });
        return;
    }

    res.send({
        mensaje: "No se como saludarte :("
    });
});

app.get("/api/cliente/:nombre/saludar", (req, res) => {
    res.send(req.params);
});

app.put("/api/cliente/:nombre", (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
        body: req.body
    });
});

// montar el servidor
http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});