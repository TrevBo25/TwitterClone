DELETE FROM USERS
WHERE id = $1 AND name = $2 AND password = $3;