-- Drop users table --
DROP TABLE IF EXISTS users

-- Add Fake User --
INSERT INTO users
(name, handle, email, password, avatar, bio, location, cover)
VALUES
('john', 'sullii', 'jsully@avatar.com', 'awesomesauce', 'http://savin-it.com/images/2016/01/21/avatarjackhd.jpg', 'my bio is basically ferngully', 'pandora', 'http://a.abcnews.com/images/US/disney_avatarland_jc_160502_16x9_992.jpg' )


-- Add Fake Post --
INSERT INTO posts
(body, likes, dislikes, repost, image, category, tagged_user, post_time)
VALUES
('fake new post2', 17, 31, 'sullii', 'https://s6.favim.com/610/151222/beatiful-cat-colors-eyes-Favim.com-3792376.jpg', 'sports', 'jrambo', '2017-06-22 19:10:25-07')


-- Follower -- user 25 should follow 30
INSERT INTO followers(user_id, following)
VALUES(25, 30)