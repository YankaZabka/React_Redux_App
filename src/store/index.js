import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {postsReducer} from "./postsReducer";
import {usersReducer} from "./usersReducer";
import {photosReducer} from "./photosReducer";
import thunk from "redux-thunk";

const defaultState = {
    error: ""
}

const generalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_ERROR":
            return {...state, error: action.payload}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    photos: photosReducer,
    general: generalReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))