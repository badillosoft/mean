const fs = require("fs");
const fetch = require("node-fetch");

async function statusHandler(response) {
    if (response.status !== 200) {
        console.log(`Status: ${response.status} (${response.statusText})`);
        const text = await response.text();
        console.log(`Message: ${text}`);
        throw new Error(text);
    }
}

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

async function task() {
    const url = "http://www.omdbapi.com/?apikey=52f65397";

    const r1 = await fetch(`${url}&s=wally`);

    await statusHandler(r1);

    const json = await r1.json();

    console.log(`Se han encontrado ${json.totalResults} resultados`);

    const movies = json.Search;

    for (let movie of movies) {
        console.log(`${movie.Title} (${movie.Year})`);
        let id = movie.imdbID;
        let r2 = await fetch(`${url}&i=${id}`);
        await statusHandler(r2);
        const fullMovie = await r2.json();
        console.log(` -- ${fullMovie.Director} (${fullMovie.Rated})`);

        await download(fullMovie.Poster, `posters/${id}_poster.jpg`);
    }
}

task().then(() => {
    console.log("Fin de la tarea.");
}).catch(err => {
    console.log(`Error: ${err}`);
});
