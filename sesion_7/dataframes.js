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
        "Edad": 23,
        "Sexo": "Mujer",
        "Telefono": "5512345678",
        "Correo": "ana@gmail.com"
    },
];

const personas2 = personas.map(persona => {
    persona.MayorEdad = persona.Edad >= 18;
    return persona;
});

console.log(personas2);