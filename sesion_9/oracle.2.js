const oracle = require("oracledb");

const config = require("./dbconfig.json");

(async () => {

    const conn = await oracle.getConnection(config);

    const query = `
    INSERT INTO burgers (id, nombre, descripcion, precio, imagen)
        VALUES (:id, :nombre, :descripcion, :precio, :imagen)
    `;

    const binds = [
        {
            id: 1,
            nombre: "Batman Burger",
            descripcion: "Hamburguesa Batman",
            precio: 90,
            imagen: "http://placehold.it/400x400"
        },
        {
            id: 2,
            nombre: "Superman Burger",
            descripcion: "Hamburguesa Superman",
            precio: 85,
            imagen: "http://placehold.it/400x400"
        }
    ];

    const result = await conn.executeMany(query, binds);

    console.log(result);

    await conn.commit();

    await conn.close();

})();