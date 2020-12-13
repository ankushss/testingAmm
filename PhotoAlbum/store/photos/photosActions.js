export const LOADING_PHOTOS_REQUEST = 'LOADING_PHOTOS_REQUEST'
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS'
export const FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR'

export const loadingRequest = () => ({
    type: LOADING_PHOTOS_REQUEST,
})

export const fetchSuccess = (data) => ({
    type: FETCH_PHOTOS_SUCCESS,
    payload: data
})

export const fetchError = () => ({
    type: FETCH_PHOTOS_ERROR,
})