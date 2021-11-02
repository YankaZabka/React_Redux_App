const defaultState = {
    photos: [],
    visiblePhotos: 3,
    isPhotoLoading: false,
    isPhotosBig: false,
    isPhotoInfoActive: false,
    isAddPhotoActive: false,
    isEditPhotoActive: false,
    isDeletePhotoActive: false,
}

export const photosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_PHOTOS":
            return {...state, photos: action.payload}
        case "SET_ADD_PHOTO":
            return {...state, photos: [...state.photos, action.payload]}
        case "SET_ACTIVE_PHOTO":
            return {...state, activePhoto: action.payload}
        case "SET_VISIBLE_PHOTOS":
            return {...state, visiblePhotos: action.payload}
        case "SET_IS_PHOTOS_LOADING":
            return {...state, isPhotosLoading: action.payload}
        case "SET_IS_PHOTOS_BIG":
            return {...state, isPhotosBig: action.payload}
        case "SET_IS_PHOTO_INFO_ACTIVE":
            return {...state, isPhotoInfoActive: action.payload}
        case "SET_IS_ADD_PHOTO_ACTIVE":
            return {...state, isAddPhotoActive: action.payload}
        case "SET_IS_EDIT_PHOTO_ACTIVE":
            return {...state, isEditPhotoActive: action.payload}
        case "SET_IS_DELETE_PHOTO_ACTIVE":
            return {...state, isDeletePhotoActive: action.payload}
        default:
            return state
    }
}