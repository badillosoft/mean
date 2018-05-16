const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -- ESQUEMAS Y MODELOS
const ClientSchema = mongoose.Schema({
    _id: String,
    nombre: String,
    correo: String,
    contraseña: String
});
const Cliente = mongoose.model("Cliente", ClientSchema);
// -- ESQUEMAS Y MODELOS

// -- RUTAS
app.put("/api/cliente/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, contraseña, edad } = req.body;

    const cliente = new Cliente({
        _id: id,
        correo: correo,
        contraseña: contraseña,
        nombre: nombre,
        edad,
    });

    cliente.save().then(() => {
        res.send({
            mensaje: "Cliente guardado",
            id
        });
    }).catch(err => {
        res.status(400).send(err);
    });
});

app.get("/api/cliente", (req, res) => {
    const { filtro } = req.query;

    if (filtro === "correo") {
        const { correo } = req.query;

        Cliente.find()
            .where({ correo: correo })
            //.where("estado").in(["activo", "suspendido"])
            //.where("edad").gte(12).lte(20)
            //.skip(page_num * page_size).limit(page_size)
            .exec()
            .then(clientes => {
                res.send(clientes);
            }).catch(err => {
                res.status(400).send(err);
            });
        return;
    }

    Cliente.find().then(clientes => {
        res.send(clientes);
    }).catch(err => {
        res.status(400).send(err);
    });
});

app.get("/api/cliente/:id", (req, res) => {
    const {id} = req.params;
    Cliente.findById(id).then(clientes => {
        res.send(clientes);
    });
});
// -- RUTAS

mongoose.connect("mongodb://localhost/mean").then(() => {
    http.createServer(app).listen(3000, () => {
        console.log("Servidor iniciado en http://localhost:3000/");
    });
});