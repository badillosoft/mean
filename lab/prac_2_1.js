const fs = require("fs");

fs.readFile("./datos.txt", "utf-8", (err, data) => {
    if(err) {
        console.log("Hubo un error al abrir el archivo.");
        console.log(err);
        return;
    }

    console.log(data);
});