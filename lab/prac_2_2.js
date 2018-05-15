const fs = require("fs");

fs.writeFile("./datos_out.txt", "Holaaaaa\nmundoooooo", (err) => {
    if (err) {
        console.log("Hubo un error al escribir el archivo");
        console.log(err);
        return;
    }
    console.log("Archivo escrito");
});