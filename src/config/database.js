const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'crud_node',
    password: 'senhadobanco',
    port: 5432,
});


module.exports =  pool;