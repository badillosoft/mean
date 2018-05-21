const express = require("express");
const router = express.Router();
const { Hamburguesa } = require("../db/hamburguesa");

router.put("/api/hamburguesa", (req, res) => {
    const body = req.body;

    Hamburguesa.create(body).then(() => {
        res.send(body);
    }).catch(err => {
        res.status(400).send(`${err}`);
    });
});

router.get("/api/hambuerguesa/:id", (req, res) => {
    const { id } = req.params;

    Hamburguesa.findById(id).then(doc => {
        res.send(doc);
    }).catch(err => {
        res.status(400).send(`${err}`);
    });
});

module.exports = router;