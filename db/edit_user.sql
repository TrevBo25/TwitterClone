UPDATE USERS
SET NAME = $1,
    HANDLE = $2,
    EMAIL = $3,
    AVATAR = $4,
    BIO = $5,
    LOCATION = $6,
    COVER = $7,
WHERE ID = $8