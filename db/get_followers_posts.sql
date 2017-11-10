select posts.id, posts.guts, posts.likes, posts.dislikes, posts.repost, posts.image, posts.category, posts.tagged_user, posts.post_time, posts.user_id, users.name, users.handle,users.avatar from posts
JOIN users ON users.id=posts.user_id
where user_id in (select following
from followers where user_id = $1);