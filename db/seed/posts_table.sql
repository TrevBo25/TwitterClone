CREATE TABLE IF NOT EXISTS posts(
    id SERIAL PRIMARY KEY, 
    body VARCHAR,
    likes INTEGER,
    dislikes INTEGER,
    repost VARCHAR,
    image VARCHAR,
    category VARCHAR,
    tagged_user VARCHAR,
    post_time TIMESTAMP,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
)