import axios from 'axios'

const initialState = {

    user: {
        id: 13,
        name: 'Limone Resqueza',
        handle: '',
        email: 'l.resquesa@gmail.com',
        avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        bio: 'I love long walks on the beach and turtles.',
        location: 'Honolulu, Hawaii',
        cover: 'https://fb-hoverboard.s3.amazonaws.com/uploads/crazy-cover-photo-122113.jpg'
    },
    pageData: {}
}

const UPDATE_USER = "UPDATE_USER";
const UPDATE_PAGE_DATA = "UPDATE_PAGE_DATA"

export default
function reducer(state=initialState, action) {

    switch(action.type) {
        case UPDATE_USER:
            return Object.assign({}, state , {user: action.payload})
        case UPDATE_PAGE_DATA + "_FULFILLED":
            return Object.assign({}, state , {pageData: action.payload})
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

export function updatePageData(handle) {
        
        var request = axios.post('/api/alluserdata', {handle:"peter"})
        .then( response => {
            console.log('thishthisthist', response.data);
            return response.data
        })

        return {
            type: UPDATE_PAGE_DATA,
            payload: request
        }
}