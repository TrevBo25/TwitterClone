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

        if(posts.lenth > 0){
            return true
        } else {
            return false;
        }
    }
}