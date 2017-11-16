const talko = require('./talko');

test('adds like to total likes', () => {
    expect(talko.addLike({like: 4})).toBe(5);
});

test('adds dislike to total dislikes', () => {
    expect(talko.addDislike({dislike: 2})).toBe(3);
});

test('makes sure that htere are posts in the array', () => {
    expect(talko.postsNotEmpty([{handle: 'trev', guts: 'here is a post'}, {handle: 'ian', guts: 'this is a thing i said'}])).toBe(true);
});

test('successfully follows user', () => {
    expect(talko.followed({trevor: true, ian: true})).toBe(true);
});

test('successfully unfollows user', () => {
    expect(talko.unfollowed({trevor: true, ian: true, todd: true})).toBe(false);
});