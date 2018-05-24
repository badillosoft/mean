const oracle = require("oracledb");
const util = require("./util");

const config = require("./dbconfig.json");

(async () => {

    const conn = await oracle.getConnection(config);

    const query = `SELECT * FROM burgers`;

    const result = await util.executeQuery(conn, query);
    
    console.log(result);

    await conn.commit();

    await conn.close();

})();