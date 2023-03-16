const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: '7591',
	host: '127.0.0.1',
	port: '5432',
	database: 'vcbrest'
})

module.exports = pool;
