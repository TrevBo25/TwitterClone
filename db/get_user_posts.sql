-- SELECT *
-- FROM posts
-- INNER JOIN users ON users.id=posts.user_id
-- ORDER BY posts.id DESC;

-- select *
-- from posts
-- where user_id = (select id from users WHERE handle = $1 )

select *
from posts
JOIN users ON users.id=posts.user_id
where user_id = (select id from users WHERE handle = $1 )