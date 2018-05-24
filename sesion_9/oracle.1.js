const oracle = require("oracledb");

const config = require("./dbconfig.json");

(async () => {

    const conn = await oracle.getConnection(config);

    const query = `
    CREATE TABLE burgers (
        id NUMBER PRIMARY KEY,
        nombre VARCHAR2(128) NOT NULL,
        descripcion VARCHAR2(255),
        precio NUMBER NOT NULL,
        imagen VARCHAR2(255)
    )
    `;

    const result = await conn.execute(query);

    console.log(result);

    await conn.close();

})();