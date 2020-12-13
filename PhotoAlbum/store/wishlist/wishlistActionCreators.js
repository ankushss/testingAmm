import { getWishlistData, setWishlistData } from '../../utils/HelperFunctions';
import * as WishlistActions from './wishlistActions'

export const fetchWishlist = () => async (dispatch) => {
    dispatch(WishlistActions.fetchWishlistLoading());
    const data = await getWishlistData();
    console.log({ data })
    if (data) dispatch(WishlistActions.fetchWishlistSuccess(JSON.parse(data)))
}

export const addToWishlist = (item) => async (dispatch) => {
    dispatch(WishlistActions.addToWishlist(item));
}

export const removeFromWishlist = (id, albumId) => async (dispatch) => {
    console.log({ id, albumId })
    dispatch(WishlistActions.removeFromWishlist(id, albumId));
}