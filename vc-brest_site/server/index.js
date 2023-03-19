const path = require('path');
require('dotenv').config({
	path: path.resolve(__dirname, './.env')
});
const express = require('express');
const sequelize = require('./db');
const models = require('./models/index');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000;


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, './static')));
app.use(fileUpload({}));
app.use('/api', router);


app.use(errorHandler);


const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`server started on port ${PORT}`));
	} catch (e) {
		console.log(e)
	}
};

start().then();
