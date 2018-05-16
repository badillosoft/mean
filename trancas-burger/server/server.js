const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -- CLIENTES

const clientes = [
    {
        id: "123",
        nombre: "Bruno Diaz",
        correo: "batman@gmail.com",
        contraseña: "robin123"
    }
];

app.put("/api/cliente/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, contraseña } = req.body;

    clientes.push({
        id,
        nombre,
        correo,
        contraseña
    });

    res.send(clientes.filter(c => c.id === id)[0]);
});

app.get("/api/cliente", (req, res) => {
    res.send(clientes);
});

app.get("/api/cliente/:id", (req, res) => {
    const { id } = req.params;

    res.send(clientes.filter(c => c.id === id)[0]);
});

// -- CLIENTES

http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});