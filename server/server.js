require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      controller = require('./controller'),
      bcrypt = require('bcrypt'),
      massive = require('massive'),
      session = require('express-session'),
      axios = require('axios'),
      cors = require('cors'),
      multer = require('multer')
      upload = multer({dest: 'public/uploads/'});

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

app.post('/api/alluserdata', controller.allUserData)

const storage = multer.diskStorage({
    
     filename: function (req, file, cb) {
         let extArray = file.mimetype.split("/");
         let extension = extArray[extArray.length - 1];
         cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
       }
     })

 // const profile = multer({storage});
 var type = upload.single('file')

 app.post('/profile', type, (req, res, next) => {
         console.log(req.body, 'Body')
         console.log(req.file.originalname)
         res.json(req.file)
         
         
 });

//  uploadSuccess({data}){
//     console.log('response data' ,data)
//     this.setState({
//         image: './uploads/' + data.filename
//     })
// }

//  updateImage({file}){
//     console.log('file', file)
//      let data = new FormData();
//      data.append('key', 'value')
//      data.append('file', file);
//      console.log(data, 'data')
//      axios.post('/profile', data)
//      .then(response => this.uploadSuccess(response))
//      .catch(error => console.log(error))
//  }


//  handleFileUpload(event){  
//      console.log(event.target.files)
//      console.log(this.state)
//      const file = event.target.files[0]
//      console.log('file', file)    
//      this.updateImage({file})
//  }

{/* <div className='editProfileImageBox'>
    <img className='editProfileImage' src={this.state.image ? this.state.image : 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png'} />
    <div className='fileInput'>
    <input  type='file' name='userImage' onChange={this.handleFileUpload} />
    </div>
</div> */}

const PORT = 8008;
app.listen(PORT, () => console.log('listening on port: ', PORT));