import { LOADING_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_ERROR } from './photosActions'

const initialState = {
    photos: [],
    isLoading: null,
    error: null
}

const PhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_PHOTOS_REQUEST:
            return {
                ...state,
                isLoading: true,
                photos: [...state.photos],
                error: null
            }
        case FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                photos: [...state.photos, ...action.payload],
                error: null
            }
        case FETCH_PHOTOS_ERROR:
            return {
                ...state,
                isLoading: false,
                photos: null,
                error: action.payload
            }
        default:
            return state
    }
}

export default PhotoReducer