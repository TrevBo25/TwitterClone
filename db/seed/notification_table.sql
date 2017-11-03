CREATE TABLE IF NOT EXISTS notification (
    id SERIAL PRIMARY KEY,
    sender INTEGER,
    recipient INTEGER,
    notificationtype VARCHAR(10),
    post_id INTEGER
)