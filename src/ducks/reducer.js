import axios from 'axios';
import io from 'socket.io-client';
const socket = io('http://localhost:8008');

const initialState = {

    user: {},
    pageData: {},
    profile: false,
    profileView: "roll",
    showSettings: false
}

const UPDATE_USER = "UPDATE_USER";
const UPDATE_PAGE_DATA = "UPDATE_PAGE_DATA";
const VIEW_PROFILE = "VIEW_PROFILE";
const CHANGE_PRO_VIEW = "CHANGE_PRO_VIEW";
const GO_SETTINGS = "GO_SETTINGS";

export default
function reducer(state=initialState, action) {

    switch(action.type) {
        case UPDATE_USER:
            return Object.assign({}, state , {user: action.payload})
        case UPDATE_PAGE_DATA + "_FULFILLED":
            return Object.assign({}, state , {pageData: action.payload})
        case VIEW_PROFILE:
            return Object.assign({}, state, {profile: action.payload})
        case CHANGE_PRO_VIEW:
            return Object.assign({}, state, {profileView: action.payload})
        case GO_SETTINGS:
            return Object.assign({}, state, {showSettings: action.payload})
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
        var request = axios.post('/api/alluserdata', {handle})
        .then( response => {
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

export function changeProView(view){
    return{
        type: CHANGE_PRO_VIEW,
        payload: view
    }
}

export function goToSettings(bool){
    return{
        type: GO_SETTINGS,
        payload:bool
    }
}