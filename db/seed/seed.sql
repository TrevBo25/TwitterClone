-- Drop users table --
DROP TABLE IF EXISTS users

-- Add Fake User --
INSERT INTO users
(name, handle, email, password, avatar, bio, location, cover)
VALUES
('john', 
'sullii', 
'jsully@avatar.com', 
'awesomesauce', 
'http://savin-it.com/images/2016/01/21/avatarjackhd.jpg', 
'my bio is basically ferngully', 
'pandora', 
'http://a.abcnews.com/images/US/disney_avatarland_jc_160502_16x9_992.jpg' )
VALUES
('spiderman',
'peter',
'peter@parker.com',
'maryjane',
'https://i.pinimg.com/736x/1a/50/65/1a50655c5e33b6a680aeafcb55bb3fed--black-spider-spider-man.jpg',
'bit by a spider',
'forest hills, NY',
'https://cdn.theculturetrip.com/wp-content/uploads/2017/06/smhldn9-1024x695.jpg' )

VALUES
('flash',
'barryallen',
'barry@allen.com',
'blur',
'http://art.cafimg.com/images/Category_31754/subcat_85397/Wally_West_Flash.jpg',
'fastest man alive',
'central city',
'https://static.comicvine.com/uploads/original/11111/111113819/3540888-7364750580-lsbFp.jpg' )
VALUES
('superman',
'clark',
'clark@kent.com',
'lois',
'https://s-media-cache-ak0.pinimg.com/236x/b2/d7/73/b2d7733f586b8d56d2e48e30978f341b--batman-fan-art-superman-artwork.jpg',
'faster than a speeding bullet',
'metropolis',
'http://batmangothamcity.net/wp-content/uploads/2013/08/smallville-metropolis.png' )


-- Add Fake Post --
INSERT INTO posts
(guts, likes, dislikes, repost, image, category, tagged_user, post_time, user_id)
VALUES
('fake new post2', 17, 31, 'sullii', 'https://s6.favim.com/610/151222/beatiful-cat-colors-eyes-Favim.com-3792376.jpg', 'sports', 'jrambo', '2017-06-22 19:10:25-07', 19)

INSERT INTO posts
(guts, likes, dislikes, repost, image, category, tagged_user, post_time, user_id)
VALUES
('i dont know what to say', 7, 1, 'ian', 'https://s6.favim.com/610/151222/beatiful-cat-colors-eyes-Favim.com-3792376.jpg', 'tech', 'rambo', '2017-06-22 19:10:25-07', 31)

VALUES
('or do you...', 
11, 
3, 
'bruce', 
'http://cdn.cnn.com/cnnnext/dam/assets/141216183300-simpsons-25-anniversary-image-4-horizontal-large-gallery.jpg', 
'tech', 
'sullii', 
NOW(), 
66)



-- Follower -- user 25 should follow 30
INSERT INTO followers(user_id, following)
VALUES(25, 30)