const defaultState = {
    users: [],
    visibleUsers: 3,
    isUsersLoading: false,
    isUsersBig: false,
    isUserInfoActive: false,
    isAddUserActive: false,
    isEditUserActive: false,
    isDeleteUserActive: false,
}

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, users: action.payload}
        case "SET_ADD_USER":
            return {...state, users: [...state.users, action.payload]}
        case "SET_ACTIVE_USER":
            return {...state, activeUser: action.payload}
        case "SET_VISIBLE_USERS":
            return {...state, visibleUsers: action.payload}
        case "SET_IS_USERS_LOADING":
            return {...state, isUsersLoading: action.payload}
        case "SET_IS_USERS_BIG":
            return {...state, isUsersBig: action.payload}
        case "SET_IS_USER_INFO_ACTIVE":
            return {...state, isUserInfoActive: action.payload}
        case "SET_IS_ADD_USER_ACTIVE":
            return {...state, isAddUserActive: action.payload}
        case "SET_IS_EDIT_USER_ACTIVE":
            return {...state, isEditUserActive: action.payload}
        case "SET_IS_DELETE_USER_ACTIVE":
            return {...state, isDeleteUserActive: action.payload}
        default:
            return state
    }
}