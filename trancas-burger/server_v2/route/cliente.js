const express = require("express");
const router = express.Router();
const Cliente = require("../db/cliente");

router.put("/cliente", (req, res) => {
    req.body._id = Math.random().toString(16).slice(2);
    Cliente.create(req.body).then(() => {
        res.send({
            "mensaje": "Se ha creado un nuevo cliente"
        });
    }).catch(err => {
        res.status(400).send(`${err}`);
    });
});

router.get("/cliente", (req, res) => {
    Cliente.find().then(clientes => {
        res.send(clientes);
    }).catch(err => {
        res.status(400).send(`${err}`);
    });
});

// TODO: Definir las demás rutas del cliente

module.exports = router;