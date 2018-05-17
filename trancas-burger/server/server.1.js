const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -- UTIL

function random_token(n = 32) {
    let token = "";
    while (token.length < n) {
        token += Math.random().toString(16).slice(2);
    }
    return token.slice(0, n);
}

function middleware_token(req, res, next) {
    const token = req.query.token || req.body.token;

    const cliente = clientes.filter(c => c.token === token)[0];

    if (!cliente) {
        res.status(401).send("unauthorized");
        return;
    }

    req.cliente = cliente;

    // TODO: Hacer un log en BD para guardar que el usuario accedió al sistema

    next();
}

app.use("/api", middleware_token);

// -- UTIL

// -- CLIENTES

const clientes = [
    {
        id: "123",
        nombre: "Bruno Diaz",
        correo: "batman@gmail.com",
        contraseña: "robin123",
        token: random_token()
    }
];

app.put("/api/cliente/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, contraseña } = req.body;

    clientes.push({
        id,
        nombre,
        correo,
        contraseña,
        token: random_token()
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

app.post("/auth/login", (req, res) => {
    const { correo, contraseña } = req.body;

    const cliente = clientes.filter(c => 
        c.correo === correo && c.contraseña === contraseña)[0];

    if (!cliente) {
        res.status(400).send("La credenciales correo y contraseña no coinciden para ningún usuario");
        return;
    }

    res.send({
        token: cliente.token
    });
});

// -- CLIENTES

http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});