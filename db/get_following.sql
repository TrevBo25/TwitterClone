SELECT *
FROM followers
INNER JOIN USERS on users.id = followers.following
WHERE user_id = (select id from users WHERE handle = $1)