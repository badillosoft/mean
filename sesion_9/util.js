module.exports = {
    executeQuery: async (conn, ...params) => {
        const result = await conn.execute(...params);

        const columns = result.metaData.map(c => c.name.toLowerCase());

        return result.rows.map(row => {
            const frame = {};
            columns.map((cN, i) => frame[cN] = row[i]);
            return frame;
        });
    }
};