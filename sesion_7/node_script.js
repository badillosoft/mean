// npm install node-fetch
const fetch = require("node-fetch");

// const task = async () => { ... };
// const task = async function () { ... };

// Consumir un servicio GET
async function task() {
    const response = await fetch("https://reqres.in/api/users?page=2&per_page=5");

    if (response.status !== 200) {
        console.log(`Status: ${response.status}`);
        const text = await response.text();
        console.log(`Message: ${text}`);
        throw new Error(text); //return Promise.reject(text);
    }

    const json = await response.json();

    console.log(json);
}

task().then(() => {
    console.log("Fin de la tarea.");
}).catch(err => {
    console.log(`Error: ${err}`);
});
