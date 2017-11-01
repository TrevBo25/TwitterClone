DELETE FROM followers
WHERE user_id = $1 AND following = $2