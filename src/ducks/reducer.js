import axios from 'axios'

const initialState = {

    user: {
        id: 68,
        name: 'superman',
        handle: 'clark',
        email: 'clark@kent.com',
        password: 'lois',
        avatar: 'https://s-media-cache-ak0.pinimg.com/236x/b2/d7/73/b2d7733f586b8d56d2e48e30978f341b--batman-fan-art-superman-artwork.jpg',
        bio: 'faster than a speeding bullet',
        location: 'metropolis',
        cover: 'http://batmangothamcity.net/wp-content/uploads/2013/08/smallville-metropolis.png'
    },
    pageData: {},
    profile: false
}

const UPDATE_USER = "UPDATE_USER";
const UPDATE_PAGE_DATA = "UPDATE_PAGE_DATA";
const VIEW_PROFILE = "VIEW_PROFILE";

export default
function reducer(state=initialState, action) {

    switch(action.type) {
        case UPDATE_USER:
            return Object.assign({}, state , {user: action.payload})
        case UPDATE_PAGE_DATA + "_FULFILLED":
            return Object.assign({}, state , {pageData: action.payload})
        case VIEW_PROFILE:
            return Object.assign({}, state, {profile: action.payload})
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
            console.log('thishthisthist', response.data);
            return response.data
        })

        return {
            type: UPDATE_PAGE_DATA,
            payload: request
        }
}

export function viewProfile(bool){
    return{
        type: VIEW_PROFILE,
        payload: bool
    }
}