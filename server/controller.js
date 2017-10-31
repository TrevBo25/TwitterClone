
module.exports = {

    registerUser(req, res){
        const db = req.app.get('db');
        const {fname, lname, handle, email, password} = req.body;
        db.check_handle([handle])
        .then(response => {
            if(response.length != 0){
                res.status(409).send('Handle already exists')
            } else {
                db.check_email([email])
                .then(response => {
                    if(response.length != 0){
                        res.status(409).send('Email already exists')
                    } else {
                        db.register_user([name, handle, email])
                        .then( response => {
                            res.status(200).send(response.data);
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
                    res.status(200).send(response.data);
                }
            }).catch( err => console.log('login_password', err))
        } else {
            login = req.body.email;
            db.login_email([login, password])
            .then(response => {
                if(response.length != 0){
                    res.status(404).send('User does not exists');
                } else {
                    res.status(200).send(response.data);
                }
            }).catch( err => console.log('login_email', err))
        }
    },
    logout(req, res){
        //kill the state in redux
    },
    updateUser(req, res){
        const db = req.app.get('db');
        const {id} = req.body
    }

}