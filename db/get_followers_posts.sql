select * from posts
where user_id in (select following
from followers where user_id = $1)