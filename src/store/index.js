import {createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";

const defaultState = {
    posts: [],
    visiblePosts: 3,
    isPostLoading: false,
    isPostBig: false,
    isViewMoreActive: false,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {...state, posts: action.payload}
        case "SET_ACTIVE_POST":
            return {...state, activePost: action.payload}
        case "SET_VISIBLE_POSTS":
            return {...state, visiblePosts: action.payload}
        case "SET_IS_POST_LOADING":
            return {...state, isPostLoading: action.payload}
        case "SET_IS_POST_BIG":
            return {...state, isPostBig: action.payload}
        case "SET_IS_VIEW_MORE_ACTIVE":
            return {...state, isViewMoreActive: action.payload}
        default:
            return state
    }
}

export const store = createStore(reducer, composeWithDevTools())