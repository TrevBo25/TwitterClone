UPDATE USERS
SET NAME = $2,
    HANDLE = $3,
    EMAIL = $4,
    AVATAR = $5,
    BIO = $6,
    LOCATION = $7,
    COVER = $8
WHERE ID = $1;