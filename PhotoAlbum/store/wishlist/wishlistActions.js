export const FETCH_WISHLIST_REQUEST = 'FETCH_WISHLIST_REQUEST'
export const FETCH_WISHLIST_SUCCESS = 'FETCH_WISHLIST_SUCCESSƒ'
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

export const fetchWishlistLoading = () => ({
    type: FETCH_WISHLIST_REQUEST
})

export const fetchWishlistSuccess = (data) => ({
    type: FETCH_WISHLIST_SUCCESS,
    payload: data
})

export const addToWishlist = (item) => ({
    type: ADD_TO_WISHLIST,
    payload: item
})

export const removeFromWishlist = (id, albumId) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: {
        id, albumId
    }
})