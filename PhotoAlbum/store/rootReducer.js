import { combineReducers } from 'redux'
import albumReducer from './albums/albumReducer'
import photoReducer from './photos/photosReducer'
import wishlistReducer from './wishlist/wishlistReducer'

export default combineReducers({
    album: albumReducer,
    photo: photoReducer,
    wishlist: wishlistReducer
})