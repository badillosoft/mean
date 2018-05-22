const text = "hola soy Ana, puedes mandarme los datos a ana@gmail.com avísame cuando los tengas al 5512345678 y deposita lo que falta en 1234-5678-9012-3456";

const text_censurado = text.replace(/[\w-_.]+@\w+(\.\w{2,3}){1,2}/g, "****@****");

console.log(text_censurado);