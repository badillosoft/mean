const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: Agregar esquemas

// TODO: Agregar rutas

mongoose.connect("mongodb://localhost/mean").then(() => {
    http.createServer(app).listen(3000, () => {
        console.log("Servidor iniciado en http://localhost:3000/");
    });
});