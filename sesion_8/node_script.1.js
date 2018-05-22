const fetch = require("node-fetch");

async function statusHandler(response) {
    if (response.status !== 200) {
        console.log(`Status: ${response.status}`);
        const text = await response.text();
        console.log(`Message: ${text}`);
        throw new Error(text); //return Promise.reject(text);
    }
}

async function task() {
    const response = await fetch("https://reqres.in/api/users?page=2&per_page=5");

    await statusHandler(response);

    const json = await response.json();

    console.log(json);
}

task().then(() => {
    console.log("Fin de la tarea.");
}).catch(err => {
    console.log(`Error: ${err}`);
});
