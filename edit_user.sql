UPDATE USERS
SET NAME = $1,
    HANDLE = $2,
    EMAIL = $3,
    PASSWORD = $4,
    AVATAR = $5,
    BIO = $6,
    LOCATION = $7,
    COVER = $8,
WHERE ID = $9