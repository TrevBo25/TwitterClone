
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
    }

}