const oracle = require("oracledb");

const config = require("./dbconfig.json");

(async () => {

    const conn = await oracle.getConnection(config);

    const query = `
    UPDATE burgers SET descripcion=:descripcion WHERE id=:id
    `;

    const binds = [
        {
            id: 1,
            descripcion: "OTRA DESCRIPCION"
        },
        {
            id: 2,
            descripcion: "OTRA"
        }
    ];

    const result = await conn.executeMany(query, binds);

    console.log(result);

    await conn.commit();

    await conn.close();

})();