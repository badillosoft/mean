const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

passport.use("local", new LocalStrategy({ session: false }, (username, password, done) => {
    if (username === "batman" && password === "robin123") {
        return done(null, {
            nombre: "Bruno Diaz",
            correo: "batman@gmail.com",
            token: "ABC1234"
        });
    }
    return done(null, false, "No autorizado");
}));

passport.use("local-token", new LocalStrategy({ session: false }, (token, done) => {
    if (username === "batman" && password === "robin123") {
        return done(null, {
            nombre: "Bruno Diaz",
            correo: "batman@gmail.com",
            token: "ABC1234"
        });
    }
    return done(null, false, "No autorizado");
}));

app.use(passport.initialize());

app.get("/api/cliente/acceder", passport.authenticate("local"), (req, res) => {
    res.send({
        mensaje: "Has iniciado sesión"
    });
});

app.get("/api/cliente", passport.authorize("local-token"), (req, res) => {
    res.send("Hola mundo");
});

http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});