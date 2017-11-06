app.post('/api/register', controller.registerUser);
* name
* handle
* email
* password

app.post('/api/login', controller.login);
* handle or email
* password

app.put('/api/edit', controller.updateUser);
* id
* name
* handle
* email
* optional avatar
* optional bio
* optional location
* optional cover

app.delete('/api/deleteuser', controller.deleteUser);
* id
* name
* password

app.post('/api/createpost', controller.createPost);
* guts
* user_id
* optional reposts
* options image
* optional category
* optional tagged_user

app.delete('/api/deletepost', controller.deletePost);
* id which is the post's id

app.post('/api/likepost', controller.likePost);
* id which is the post's id

app.post('/api/dislikepost', controller.dislikePost);
* id which is the post's id

app.post('/api/getfollowing', controller.getFollowing);
* id

app.post('/api/getfollowers', controller.getFollowers);
* id

app.post('/api/follow', controller.follow);
* id
* otherid

app.post('/api/unfollow', controller.unfollow);
* id
* otherid

app.get('/api/getposts', controller.getPosts);
* nothing sent on body

app.post('/api/fposts', controller.getFollowersPosts);
* id

app.post('/api/getuserfromhandle', controller.getUserFromHandle);
* handle

app.post('/api/changehandle', controller.changeHandle);
* id
newHandle

app.post('/api/changeemail', controller.changeEmail);
* id
* email
* newEmail

app.post('/api/changepassword', controller.changePassword);
* id
* password
* newPass1
* newPass2
