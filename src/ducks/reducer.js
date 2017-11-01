const initialState = {
    user: {
        name: '',
        handle: '',
        email: '',
        avatar: '',
        bio: '',
        location: '',
        cover: ''
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