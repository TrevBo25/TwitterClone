
module.exports = {

    registerUser(req, res){
        const db = req.app.get('db');
        const {name, handle, email, password} = req.body;
        console.log(name, handle, email, password);
        db.check_user([handle])
        .then(response => {
            if(response.length != 0){
                res.status(409).send('Handle already exists')
            } else {
                db.check_email([email])
                .then(response => {
                    if(response.length != 0){
                        res.status(409).send('Email already exists')
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
        let login = '';
        if (req.body.handle){
            login = req.body.handle;
            db.login_handle([login, password])
            .then(response => {
                if(response.length != 0){
                    res.status(404).send('User does not exists');
                } else {
                    res.status(200).json(response.data);
                }
            }).catch( err => console.log('login_password', err))
        } else {
            login = req.body.email;
            db.login_email([login, password])
            .then(response => {
                if(response.length != 0){
                    res.status(404).send('User does not exists');
                } else {
                    res.status(200).json(response.data);
                }
            }).catch( err => console.log('login_email', err))
        }
    },
    updateUser(req, res){
        const db = req.app.get('db');
        const {id, name, handle, email} = req.body;
        if (req.body.avatar){
            const {avatar} = req.body;
        } else {
            const avatar = null;
        }
        if (req.body.bio){
            const {bio} = req.body;
        } else {
            const bio = null;
        }
        if (req.body.location){
            const {location} = req.body;
        } else {
            const location = null;
        }
        if (req.body.cover){
            const {cover} = req.body;
        } else {
            const cover = null;
        }
        db.edit_user([name, handle, email, avatar, bio, location, cover, id])
        .then(response => {
            res.status(200).json(response.data);
        }).catch(err => console.log('edit_user', err))
    },
    deleteUser(req, res){
        const db = req.app.get('db');
        const {id, name, password} = req.body;
        db.delete_user([id, name, password])
        .then(response => {
            res.status(204).end();
        })
    }

}