const oracle = require("oracledb");

const config = require("./dbconfig.json");

(async () => {

    const conn = await oracle.getConnection(config);

    const result = await conn.execute("SELECT * FROM burgers");

    console.log(result);

    await conn.close();

})();