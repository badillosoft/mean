const oracle = require("oracledb");

const config = require("./dbconfig.json");

(async () => {

    const conn = await oracle.getConnection(config);

    const query = `SELECT * FROM burgers ORDER BY id`;

    const result = await conn.execute(query, {}, {
        resultSet: true
    });

    while(true) {
        const row = await result.resultSet.getRow();
        if (!row) {
            break;
        }
        
        const columns = result.metaData.map(c => c.name);
        
        let frame = {};
        
        for (let i = 0; i < columns.length; i++) {
            frame[columns[i].toLowerCase()] = row[i];
        }

        console.log(frame);
    }

    await conn.commit();

    await conn.close();

})();