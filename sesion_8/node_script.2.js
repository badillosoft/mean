const fetch = require("node-fetch");

async function statusHandler(response) {
    if (response.status !== 200) {
        console.log(`Status: ${response.status} (${response.statusText})`);
        const text = await response.text();
        console.log(`Message: ${text}`);
        throw new Error(text); //return Promise.reject(text);
    }
}

async function task() {
    const r1 = await fetch("http://www.omdbapi.com/?apikey=52f65397&s=batman");

    await statusHandler(r1);

    // Search: [{}] - contine el arreglo de peliculas
    // totalResults: number - contine el número de resultados
    const json = await r1.json();

    console.log(`Se han encontrado ${json.totalResults} resultados`);

    const movies = json.Search;

    // Title: string - título de la película
    // Year: string - año de registro
    // imdbID: string - ID de la película
    // Type: string - tipo de pelicula
    // Poster: string/url - url de la imagen del póster de la película
    for (let movie of movies) {
        console.log(`${movie.Title} (${movie.Year})`);
        let id = movie.imdbID;
        let r2 = await fetch(`http://www.omdbapi.com/?apikey=52f65397&i=${id}`);
        await statusHandler(r2);
        const fullMovie = await r2.json();
        console.log(` -- ${fullMovie.Director} (${fullMovie.Rated})`);
    }
}

task().then(() => {
    console.log("Fin de la tarea.");
}).catch(err => {
    console.log(`Error: ${err}`);
});
