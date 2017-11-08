import axios from 'axios'

const initialState = {

    user: {
        id: 66,
        name: "spiderman",
        handle: "peter",
        email: "peter@parker.com",
        password: "maryjane",
        avatar: "https://i.pinimg.com/736x/1a/50/65/1a50655c5e33b6a680aeafcb55bb3fed--black-spider-spider-man.jpg",
        bio: "bit by a spider",
        location: "forest hills, NY",
        cover: "https://cdn.theculturetrip.com/wp-content/uploads/2017/06/smhldn9-1024x695.jpg"
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