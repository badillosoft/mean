const oracle = require("oracledb");

const config = require("./dbconfig.json");

function toDataframe(columns, mat_rows) {
    columns = columns.map(c => c.name);

    const rows = []; 
    
    // const rows = mat_rows.map(row => {
    //    const frame = {};
    //    columns.map((cN, i) => frame[cN] = row[i]);
    //    return frame;
    // });

    for (let row of mat_rows) {
        let frame = {};

        for (let i = 0; i < columns.length; i++) {
            let columnName = columns[i];
            let rowValue = row[i];

            frame[columnName] = rowValue;
        }

        rows.push(frame);
    }

    return rows;
}

(async () => {

    const conn = await oracle.getConnection(config);

    const query = `
    SELECT * FROM burgers
    `;

    const result = await conn.execute(query);
    
    const data = toDataframe(result.metaData, result.rows);
    
    console.log(data);

    await conn.commit();

    await conn.close();

})();