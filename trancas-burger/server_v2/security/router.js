const express = require("express");
const router = express.Router();
const Cliente = require("../db/cliente");

router.post("/login", (req, res) => {
    const { correo, contraseña } = req.body;

    Cliente.findOne()
        .where("correo").equals(correo)
        .where("contraseña").equals(contraseña)
        .exec().then(cliente => {
            if (!cliente) {
                return Promise.reject("Credencial no válidas");
            }

            res.cliente = cliente;

            res.send({
                token: cliente.token
            });
        }).catch(err => {
            res.status(400).send(`${err}`);
        });
});

module.exports = router;