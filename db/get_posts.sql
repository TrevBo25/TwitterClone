SELECT *
FROM posts
INNER JOIN users ON users.id=posts.user_id
ORDER BY posts.id DESC;