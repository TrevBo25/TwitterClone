require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      controller = require('./controller'),
      bcrypt = require('bcrypt'),
      massive = require('massive'),
      session = require('express-session'),
      axios = require('axios'),
      cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const saltRounds = 5;

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
}).catch('err', err => console.log(err))


app.post('/api/register', controller.registerUser);
app.post('/api/login', controller.login);
app.put('/api/edit', controller.updateUser);
app.delete('/api/deleteuser', controller.deleteUser);
app.post('/api/createpost', controller.createPost);


const PORT = 8008;
app.listen(PORT, () => console.log('listening on port: ', PORT));