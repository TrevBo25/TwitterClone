SELECT *
FROM USERS
WHERE HANDLE = $1 OR EMAIL = $1;

-- SELECT followers.user_id
-- FROM USERS
-- INNER JOIN followers ON followers.user_id=users.id
-- WHERE HANDLE = $1;

-- SELECT followers.following
-- FROM USERS
-- INNER JOIN followers ON followers.following=users.id
-- WHERE HANDLE = $1;

