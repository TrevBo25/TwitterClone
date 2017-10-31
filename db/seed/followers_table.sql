CREATE TABLE IF NOT EXISTS followers(
    id SERIAL PRIMARY KEY,
    following INTEGER,
    user_id INTEGER, 
    FOREIGN KEY (user_id) REFERENCES users(id)
)