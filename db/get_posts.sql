select *
from posts
JOIN users ON users.id=posts.user_id
JOIN followers ON followers.following = posts.user_id
where users.id = (select id from users WHERE handle = $1 )