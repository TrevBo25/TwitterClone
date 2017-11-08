import axios from 'axios'

const initialState = {

    user: {
        id: '',
        name: '',
        handle: '',
        email: '',
        avatar: '',
        bio: '',
        location: '',
        cover: ''
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
        console.log(handle)
        var request = axios.post('/api/alluserdata', {handle})
        .then( response => {
            return response.data
        })

        return {
            type: UPDATE_PAGE_DATA,
            payload: request
        }
}