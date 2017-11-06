SELECT * 
FROM followers
JOIN users ON users.id = followers.user_id
WHERE following = (select id from users WHERE handle = $1 );