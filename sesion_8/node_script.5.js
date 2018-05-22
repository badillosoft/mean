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

(async () => {
    const url = "http://placehold.it/3000x4450";

    try {
        await download(url, "/Users/kmmx/Desktop/batman_poster.png");
    } catch(err) {
        console.log(`${err}`);
    }
})();