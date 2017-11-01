const initialState = {
    user: {
        name: 'Limone Resqueza',
        handle: 'fastgirl222',
        email: 'l.resquesa@gmail.com',
        avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        bio: 'I love long walks on the beach and turtles.',
        location: 'Honolulu, Hawaii',
        cover: 'https://fb-hoverboard.s3.amazonaws.com/uploads/crazy-cover-photo-122113.jpg'
    }
}

const UPDATE_USER = "UPDATE_USER";

export default
function reducer(state=initialState, action) {

    switch(action.type) {
        case UPDATE_USER:
            return Object.assign({}, state , {user: action.payload})
        default:
        return state
    }
}

export function updateUser(userData) {
    return {
        type: UPDATE_USER,
        payload: userData
    }
}