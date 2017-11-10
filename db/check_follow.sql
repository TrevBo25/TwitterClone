select *
from followers
where user_id = $1 AND following = $2;