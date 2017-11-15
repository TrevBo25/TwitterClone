const storage = multer.diskStorage({
    
     filename: function (req, file, cb) {
         let extArray = file.mimetype.split("/");
         let extension = extArray[extArray.length - 1];
         cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
       }
     })

 // const profile = multer({storage});
 var type = upload.single('file')

//  app.post('/profile', type, (req, res, next) => {
//          console.log(req.body, 'Body')
//          console.log(req.file.originalname)
//          res.json(req.file)
//  });

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req)
  })
  



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