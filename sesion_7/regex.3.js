const text = "hola soy Ana, puedes mandarme los datos a ana_1999@gmail.com avísame cuando ana@gmail.com los tengas al 5512345678 y deposita lo que falta en 1234-5678-9012-3456";

const emails = [];

for (let m of text.match(/([\w-_.]+)@\w+(\.\w{2,3}){1,2}/g)) {
    console.log(m);

    console.log(m.index);

    const nombre = text.slice(m.index, m.index + m[1].length);

    emails.push({ nombre, email: m[0] });
}

console.log(emails);