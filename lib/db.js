const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "testdb",
    connectionLimit: 5
});

async function query(sql, values) {
    let conn;
    try {
        conn = await pool.getConnection();
        return await conn.query(sql, values);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        if (conn) conn.end();
    }
}

module.exports = { query };
