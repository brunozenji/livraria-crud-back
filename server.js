//const sequelize = require('./src/config/database');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

var port = 8081;

app.listen(port, () => {
    console.log(`Server is happen on port ${port}`);
});