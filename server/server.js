const express = require('express'),
bodyParser = require('body-parser')
controller = require('./controller');

const app = express();
app.use(bodyParser.json());


const PORT = 3838;
app.listen(PORT, () => console.log('listening on port: ', PORT));