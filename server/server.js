require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      controller = require('./controller'),
      bcrypt = require('bcrypt'),
      massive = require('massive'),
      session = require('express-session'),
      axios = require('axios'),
      cors = require('cors'),
      multer = require('multer'),
      upload = multer({dest: 'public/uploads/'});

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server)
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
app.delete('/api/deletepost', controller.deletePost);
app.post('/api/likepost', controller.likePost);
app.post('/api/dislikepost', controller.dislikePost);
app.post('/api/getfollowing', controller.getFollowing);
app.post('/api/getfollowers', controller.getFollowers);
app.post('/api/follow', controller.follow);
app.post('/api/unfollow', controller.unfollow);
app.get('/api/getposts', controller.getPosts);
app.get('/api/getpostslanding', controller.getPostsLanding);
app.post('/api/fposts', controller.getFollowersPosts);
app.post('/api/getuserfromhandle', controller.getUserFromHandle);
app.post('/api/changehandle', controller.changeHandle);
app.post('/api/changeemail', controller.changeEmail);
app.post('/api/changepassword', controller.changePassword);
app.post('/api/changebio', controller.changeBio);
app.post('/api/changelocation', controller.changeLocation);
app.post('/api/changename', controller.changeName);
app.post('/api/alluserdata', controller.allUserData)


const PORT = 8008;
server.listen(PORT, () => console.log("I'm listenin' brotha' on port ", PORT));

io.on('connection', function(socket){
    console.log('we are connected');

    
})