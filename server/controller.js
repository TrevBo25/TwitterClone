
module.exports = {

    registerUser(req, res){
        const db = req.app.get('db');
        const {name, handle, email, password} = req.body;
        db.check_email([email])
        .then(response => {
            if(response.length != 0){
                res.status(200).send("Email already exists")
            } else {
                db.check_user([handle])
                .then(response => {
                    if(response.length != 0){
                        res.status(200).send("Handle already exists")
                    } else {
                        db.register_user([name, handle, email, password])
                        .then( response => {
                            db.login_handle([handle, password])
                            .then(response => {
                                res.status(200).json(response[0])
                            })
                        }).catch( err => console.log('register_user', err));
                    }
                }).catch(err => console.log('check_email', err));
            }
        }).catch(err => console.log('check_handle', err));
    },
    login(req, res){
        const db = req.app.get('db');
        const {password} = req.body;
        console.log(req.body);
        let login = '';
        if (req.body.handle){
            login = req.body.handle;
            db.login_handle([login, password])
            .then(response => {
                if(response.length === 0){
                    res.status(404).send('User does not exist');
                } else {
                    res.status(200).json(response[0]);
                }
            }).catch( err => console.log('login_password', err))
        } else {
            login = req.body.email;
            db.login_email([login, password])
            .then(response => {
                if(response.length === 0){
                    res.status(404).send('User does not exists');
                } else {
                    res.status(200).json(response);
                }
            }).catch( err => console.log('login_email', err))
        }
    },
    updateUser(req, res){
        const db = req.app.get('db');
        const {id, name, handle, email} = req.body;
        console.log(req.body);
        const avatar = req.body.avatar || null;
        const bio = req.body.bio || null;
        const location = req.body.location || null;
        const cover = req.body.cover || null;
        db.edit_user([id, name, handle, email, avatar, bio, location, cover])
        .then(response => {
            db.get_user([handle])
            .then(response => {
                if(response.length === 0){
                    res.status(404).send('User does not exist');
                } else {
                    res.status(200).json(response);
                }
            }).catch( err => console.log('get_user', err))
        }).catch(err => console.log('edit_user', err))
    },
    deleteUser(req, res){
        const db = req.app.get('db');
        const {id, name, password} = req.body;
        db.delete_user([id, name, password])
        .then(response => {
            res.status(204).end();
        }).catch(err => console.log('delete_user', err))
    },
    createPost(req, res){
        const db = req.app.get('db');
        const {guts, reposts, image, category, tagged_user, user_id} = req.body;
        db.create_post([guts, reposts, image, category, tagged_user, user_id])
        .then(response => {
            res.status(200).send('Post success!')
        }).catch( err => { console.log("create_post", err);})
    },
    deletePost(req, res){
        const db = req.app.get('db');
        const {id} = req.body;
        db.delete_post([id])
        .then(response => {
            res.status(200).send("Post deleteted")
        }).catch( err => { console.log("delete_post", err);})
    },
    likePost(req, res){
        const db = req.app.get('db');
        const{id} = req.body;
        db.get_likes([id])
        .then(response => {
            let newLikes = response[0].likes + 1;
            db.set_likes([id, newLikes]).then(response => {
                res.status(200).send("liked")
            })
        }).catch( err => { console.log("like_post", err);})
    },
    dislikePost(req, res){
        const db = req.app.get('db');
        const{id} = req.body;
        db.get_dislikes([id])
        .then(response => {
            let newDisLikes = response[0].dislikes + 1;
            db.set_dislikes([id, newDisLikes])
            .then(response => {
                res.status(200).send("disliked")
            })
        }).catch( err => { console.log("dislike_post", err);})
    },
<<<<<<< HEAD
    getFollowing(req, res){
        const db = req.app.get('db');
        const{id} = req.body;
        db.get_following([id])
        .then( response => {
            console.log(response);
        })
    },
    getFollowers(req, res){
        const db = req.app.get('db');
        const{id} = req.body;
        db.get_followers([id])
        .then( response => {
            console.log(response);
        })
    },
    follow(req, res){
        const db = req.app.get('db');
        const{id, otherid} = req.body;
        db.follow([id, otherid])
        .then( response => {
            console.log(response);
        })
    },
    unfollow(req, res){
        const db = req.app.get('db');
        const{id, otherid} = req.body;
        db.unfollow([id, otherid])
        .then( response => {
            console.log(response);
=======
    getPosts(req,res){
        const db = req.app.get('db');
        db.get_posts()
        .then(response => {
            res.status(200).json(response);
>>>>>>> 9207ac605ed88db794449e652847b4a6fd5a20d3
        })
    },
    getFollowing(req, res){
        const db = req.app.get('db');
        const{id} = req.body;
        db.get_following([id])
        .then( response => {
            let users = [];
            response.forEach(function(e, i, a) {
                users.push(e.following);
            }, this);
            res.status(200).send(users)
        }).catch( err => { console.log("get_following", err);})
    },
    getFollowers(req, res){
        const db = req.app.get('db');
        const{id} = req.body;
        db.get_followers([id])
        .then( response => {
            let users = [];
            response.forEach(function(e, i, a) {
                users.push(e.user_id);
            }, this);
            res.status(200).send(users)
        }).catch( err => { console.log("get_followers", err);})
    },
    follow(req, res){
        const db = req.app.get('db');
        const{id, otherid} = req.body;
        db.follow([id, otherid])
        .then( response => {
            res.status(200).send("followed")
        }).catch( err => { console.log("follow", err);})
    },
    unfollow(req, res){
        const db = req.app.get('db');
        const{id, otherid} = req.body;
        db.unfollow([id, otherid])
        .then( response => {
            res.status(200).send("unfollowed")
        }).catch( err => { console.log("unfollow", err);})
    }

}
