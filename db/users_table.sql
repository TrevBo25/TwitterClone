CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    handle VARCHAR(20) unique,
    email VARCHAR unique,
    password VARCHAR,
    avatar VARCHAR,
    bio VARCHAR,
    location VARCHAR,
    cover VARCHAR
)