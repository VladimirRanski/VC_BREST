const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		dialect: 'postgres',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT
	}
)

/*const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: '7591',
	host: '127.0.0.1',
	port: '5432',
	database: 'vcbrest'
})

module.exports = pool;
*/
