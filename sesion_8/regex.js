const text = "hola soy Ana, puedes mandarme los datos a ana@gmail.com avísame cuando los tengas al 5512345678 y deposita lo que falta en 1234-5678-9012-3456";

const r = new RegExp("[\\w-_.]+@\\w+(\\.\\w{2,3}){1,2}");

const m = text.match(r);

if (m) {
    console.log(m);
}

const m2 = text.match(/[\w-_.]+@\w+(\.\w{2,3}){1,2}/);

if (m2) {
    console.log(m2);
}