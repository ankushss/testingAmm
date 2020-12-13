import { act } from 'react-test-renderer'
import { setWishlistData } from '../../utils/HelperFunctions'
import { FETCH_WISHLIST_SUCCESS, FETCH_WISHLIST_REQUEST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './wishlistActions'

const initialState = {
    isLoading: null,
    wishlist: []
}

const WishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WISHLIST_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case FETCH_WISHLIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                wishlist: action.payload
            }
        }
        case ADD_TO_WISHLIST: {
            return {
                wishlist: [...state.wishlist, action.payload]
            }
        }
        case REMOVE_FROM_WISHLIST: {
            return {
                wishlist: state.wishlist.filter(item => (item.id != action.payload.id && item.albumId != action.payload.albumId))
            }
        }
        default: return state
    }
}

export default WishlistReducer