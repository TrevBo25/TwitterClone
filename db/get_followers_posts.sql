select * from posts
JOIN users ON users.id=posts.user_id
where user_id in (select following
from followers where user_id = $1);