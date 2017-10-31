UPDATE POSTS
SET BODY = $1,
    LIKES = 0,
    DISLIKES = 0,
    REPOSTS = $2,
    IMAGE = $3,
    CATEGORY = $4,
    TAGGED_USER = $5,
    POST_TIME = $6,
    USER_ID = $7