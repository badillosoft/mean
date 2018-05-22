const text = "hola soy Ana, puedes mandarme los datos a ana_1999@gmail.com avísame cuando ana@gmail.com los tengas al 5512345678 y deposita lo que falta en 1234-5678-9012-3456";

const m = text.match(/([\w-_.]+)@\w+(\.\w{2,3}){1,2}/);

console.log(m);

console.log(m.index);

const nombre = text.slice(m.index, m.index + m[1].length);

console.log(nombre);

const text_censored = text.slice(0, m.index) + "****" + text.slice(m.index + m[1].length);

console.log(text_censored);