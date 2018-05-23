const fs = require("fs");
const fetch = require("node-fetch");

async function download(url, filename) {
    const response = await fetch(url);

    if (response.status !== 200) {
        console.log("Fail downloading");
        return;
    }

    const f = fs.createWriteStream(filename);

    await response.body.pipe(f);

    console.log("File downloaded");
}

const url = "http://placehold.ixt/300x445";

download(url, "/Users/kmmx/Desktop/batman_poster.png").then(() => {
    console.log("Descarga exitosa");
}).catch(() => {
    console.log("No se pudo realizar la descarga");
});
