const Cliente = require("../db/cliente");

module.exports = (req, res, next) => {
    const token = req.query.token || req.body.token || "XXXX";
    Cliente.findOne()
        .where("token").equals(token)
        .exec().then(cliente => {
            if (!cliente) {
                return Promise.reject();
            }

            req.cliente = cliente;
            next();
        }).catch(err => {
            res.status(401).send("No autorizado\n");
        });
};