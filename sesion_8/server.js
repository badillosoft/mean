const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);

// npm i socket.io
const io = require("socket.io")(server);

app.get("/api/mensaje/nuevo", (req, res) => {
    const id = req.query.id || "anon";
    const mensaje = req.query.m || "(Sin mensaje)";

    io.emit("mensaje-nuevo", {
        id,
        mensaje,
        fecha: new Date()
    });

    res.send({
        resultado: "mensaje enviado"
    });
});

io.on("connection", socket => {
    console.log(`socket: ${socket.id}`);
});

server.listen(3000, () => {
    console.log("Server started at http://localhost:3000/");
});