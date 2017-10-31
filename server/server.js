const express = require('express'),
bodyParser = require('body-parser')
controller = require('./controller')
bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
const saltRounds = 5;





const PORT = 8008;
app.listen(PORT, () => console.log('listening on port: ', PORT));