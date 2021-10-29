const defaultState = {
    posts: [],
    visiblePosts: 3,
    isPostsLoading: false,
    isPostsBig: false,
    isPostInfoActive: false,
    isAddPostActive: false,
    isEditPostActive: false,
    isDeletePostActive: false,
}

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {...state, posts: action.payload}
        case "SET_ACTIVE_POST":
            return {...state, activePost: action.payload}
        case "SET_VISIBLE_POSTS":
            return {...state, visiblePosts: action.payload}
        case "SET_IS_POSTS_LOADING":
            return {...state, isPostsLoading: action.payload}
        case "SET_IS_POSTS_BIG":
            return {...state, isPostsBig: action.payload}
        case "SET_IS_POST_INFO_ACTIVE":
            return {...state, isPostInfoActive: action.payload}
        case "SET_IS_ADD_POST_ACTIVE":
            return {...state, isAddPostActive: action.payload}
        case "SET_IS_EDIT_POST_ACTIVE":
            return {...state, isEditPostActive: action.payload}
        case "SET_IS_DELETE_POST_ACTIVE":
            return {...state, isDeletePostActive: action.payload}
        default:
            return state
    }
}