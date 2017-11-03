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
            const findUsername = /@([a-z\d]+)/ig;
            const db = req.app.get('db');
            const {guts, user_id} = req.body;
            const reposts = req.body.reposts || null;
            const image = req.body.image || null;
            const category = req.body.category || null;
            const tagged_user = req.body.tagged_user || null
            const tagged = findUsername.exec(guts) || null
            if(tagged === null){
                db.create_post([guts, reposts, image, category, tagged_user, user_id, null])
                .then(response => {
                    res.status(200).send('Post success!')
                }).catch( err => { console.log("create_post", err);})
            } else {
                var taggedHandle = tagged[1]
                db.create_post([guts, reposts, image, category, taggedHandle, user_id, taggedHandle])
                .then(response => {
                    var post_id = response[0].id;
                    db.get_user_id_from_handle([taggedHandle])
                    .then(response => {
                        var taggedID = response[0].id;
                        db.send_notification([user_id, taggedID, 'tagged', post_id])
                        .then( response => {
                            res.status(200).send('Post success, tagged user notified')
                        })
                    })
                }).catch( err => { console.log("create_post and send tagged user notification", err);})
            }
            
    
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
        getPosts(req,res){
            const db = req.app.get('db');
            db.get_posts()
            .then(response => {
                res.status(200).json(response);
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
                db.send_notification([id, otherid, 'follow', null])
                .then( response => {
                    res.status(200).send("followed and notified")
                })
            }).catch( err => { console.log("follow", err);})
        },
        unfollow(req, res){
            const db = req.app.get('db');
            const{id, otherid} = req.body;
            db.unfollow([id, otherid])
            .then( response => {
                db.send_notification([id, otherid, 'unfollow', null])
                .then( response => {
                    res.status(200).send("unfollowed and notified")
                })
            }).catch( err => { console.log("unfollow", err);})
        },
        getUserFromHandle(req, res){
            const db = req.app.get('db');
            const {handle} = req.body;
            db.get_user_from_handle([handle])
            .then(response => {
                console.log('herherherher', response[0]);
                res.status(200).json(response[0]);
            }).catch(err => console.log('getuserfromhandle', err))
        },
        // new stuff from Ian
        getFollowersPosts(req, res){
            console.log("hello");
            const db = req.app.get('db');
            const {id} = req.body;
            db.get_followers_posts([id])
            .then( response => { console.log(response);
            res.status(200).json(response);
            }).catch( err => {
                console.log("getFollowersPosts", err)
            })
        },
        changeHandle(req, res){
            const db = req.app.get('db');
            const {id, newHandle} = req.body;
            db.change_handle([id, newHandle])
            .then( response => {
                res.status(200).send('Handle successfully changed!')
            }).catch( err => console.log("change_handle", err))
        },
        changeEmail(req, res){
            const db = req.app.get('db');
            const {id, email, newEmail} = req.body;
            db.check_user_email([id, email])
            .then( response => {
                if (response.length != 0){
                    db.change_email([id, newEmail])
                    .then( response => {
                        res.status(200).send('Email successfull changed!')
                    }).catch( err => console.log("check_email", err))
                }
            }).catch( err => console.log("change_email", err))
        },
        changePassword(req, res){
            const db = req.app.get('db');
            const {id, password, newPass1, newPass2} = req.body;
            db.check_password([id, password])
            .then( response => {
                if(response.length != 0){
                    if(newPass1 === newPass2){
                        db.change_password([id, newPass1])
                        .then( response => {
                            res.status(200).send('Password successfully changed')
                        }).catch( err => console.log('change_password', err))
                    } else {
                        res.status(200).send('New passwords did not match')
                    }
                } else {
                    res.status(200).send("Current password is not correct")
                }
            }).catch( err => console.log('check_password', err))
        }
    }