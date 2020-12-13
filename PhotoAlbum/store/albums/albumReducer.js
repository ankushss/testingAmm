import { LOADING_ALBUM_REQUEST, FETCH_ALBUM_ERROR, FETCH_ALBUM_SUCCESS } from './albumActions'

const initialState = {
    albums: [],
    isLoading: null,
    error: null
}

const AlbumReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_ALBUM_REQUEST:
            return {
                ...state,
                isLoading: true,
                albums: [...state.albums],
                error: null
            }
        case FETCH_ALBUM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                albums: [...state.albums, ...action.payload],
                error: null
            }
        case FETCH_ALBUM_ERROR:
            return {
                ...state,
                isLoading: false,
                albums: null,
                error: action.payload
            }
        default:
            return state
    }
}

export default AlbumReducer