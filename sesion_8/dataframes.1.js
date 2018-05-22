const personas = [
    {
        "Nombre": "Ana",
        "Edad": 23,
        "Sexo": "Mujer",
        "Telefono": "5512345678",
        "Correo": "ana@gmail.com"
    },
    {
        "Nombre": "Ana",
        "Edad": 23,
        "Sexo": "Mujer",
        "Telefono": "5512345678",
        "Correo": "ana@gmail.com"
    },
    {
        "Nombre": "Ana",
        "Edad": 23,
        "Sexo": "Mujer",
        "Telefono": "5512345678",
        "Correo": "ana@gmail.com"
    },
    {
        "Nombre": "Ana",
        "Edad": 32,
        "Sexo": "Mujer",
        "Telefono": "5512345678",
        "Correo": "ana@gmail.com"
    },
];

const personas2 = personas.filter(persona => {
    return persona.Sexo === "Mujer" && persona.Edad > 30;
});

console.log(personas2);