const oracle = require("oracledb");

const config = require("./dbconfig.json");

oracle.getConnection(config).then(conn => {
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

    conn.executeMany(query, binds).then(result => {
        console.log(result);

        conn.commit().then(() => {
            conn.close().then(() => {
                console.log("fin del programa");
            });
        });
    });
});