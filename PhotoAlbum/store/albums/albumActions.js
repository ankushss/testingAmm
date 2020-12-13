export const LOADING_ALBUM_REQUEST = 'LOADING_ALBUM_REQUEST'
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS'
export const FETCH_ALBUM_ERROR = 'FETCH_ALBUM_ERROR'

export const loadingRequest = () => ({
    type: LOADING_ALBUM_REQUEST,
})

export const fetchSuccess = (data) => ({
    type: FETCH_ALBUM_SUCCESS,
    payload: data
})

export const fetchError = () => ({
    type: FETCH_ALBUM_ERROR,
})