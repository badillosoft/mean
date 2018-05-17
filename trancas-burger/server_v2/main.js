const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
    app: app,
    start: (options = {}) => {
        const host = options.host || "localhost";
        const port = options.port || 3000;
        const mongo_host = options.mongo_host || "localhost";
        const mongo_port = options.mongo_port || 27017;
        const mongo_db = options.mongo_db || "test";

        const uri = `mongodb://${mongo_host}:${mongo_port}/${mongo_db}`;

        return mongoose.connect(uri).then(() => {
            console.log(`Conectado a ${uri}`);
            return new Promise((resolve, reject) => {
                http.createServer(app).listen(port, host, () => {
                    console.log(`Servidor iniciado en http://${host}:${port}/`);
                    resolve();
                });
            });
        });
    }
}