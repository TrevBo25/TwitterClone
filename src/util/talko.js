module.exports = {
    addLike: function(id){
        // db.get_likes([id])
        // .then(response => {
        //     let newLikes = response[0].likes + 1;
        //     db.set_likes([id, newLikes]).then(response => {
        //         res.status(200).send("liked")
        //     })
        // }).catch( err => { console.log("like_post", err);})

        //id will get a integer of that posts likes

        //test to see if newLikes - id.like === 1

        var likes = id.like;
        var newLikes = likes + 1;
        return newLikes;
    }, 
    addDislike: function(id){
        // db.get_dislikes([id])
        // .then(response => {
        //     let newDisLikes = response[0].dislikes + 1;
        //     db.set_dislikes([id, newDisLikes])
        //     .then(response => {
        //         res.status(200).send("disliked")
        //     })
        // }).catch( err => { console.log("dislike_post", err);})

        //id will get a integer of that posts dislikes

        //test to see if newDislikes - id.dislike === 1

        var dislikes = id.dislike;
        var newDislLikes = dislikes + 1;
        return newDisikes;
    },
    postsNotEmpty: function(posts){
        // const db = req.app.get('db');
        // const{id} = req.body;
        // db.get_following([id])
        // .then( response => {
        //     let users = [];
        //     response.forEach(function(e, i, a) {
        //         users.push(e.following);
        //     }, this);
        //     res.status(200).send(users)
        // }).catch( err => { console.log("get_following", err);})

        // posts are not empty

        //test to see if it returns true

        if(posts.lenth > 0){
            return true
        } else {
            return false;
        }
    },
    followed: function(obj) {
        // const db = req.app.get('db');
        // const{id, otherid} = req.body;
        // db.check_follow([id, otherid])
        // .then (user => {
        //     if(user.length === 0){
        //         db.follow([id, otherid])
        //         .then( response => {
        //             db.send_notification([id, otherid, 'follow', null])
        //             .then( response => {
        //                 res.status(200).send("followed and notified")
        //             })
        //         }).catch( err => { console.log("follow", err);})
        //     } else {
        //         res.status(200).send("You already follow them, you silly goose!")
        //     }
        // }).catch( err => { console.log("checkfollow", err);})

        //tests to see if they are following if not follow them

        //tests to see function returns true

        if(obj.hasOwnProperty("todd") < 0 ){
            obj.todd = true
        }
        return obj.todd;
    },

    unfollowed: function(obj){
        // const db = req.app.get('db');
        // const{id, otherid} = req.body;
        // db.unfollow([id, otherid])
        // .then( response => {
        //     db.send_notification([id, otherid, 'unfollow', null])
        //     .then( response => {
        //         res.status(200).send("unfollowed and notified")
        //     })
        // }).catch( err => { console.log("unfollow", err);})

        //id will get an integer of that id's followers

        // tests to see if fuction returns true

        if(obj.hasOwnProperty("todd") > 0 ) {
            obj.todd = false
        }
        return obj.todd;
    },
    
}