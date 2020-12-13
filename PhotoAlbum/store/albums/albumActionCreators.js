import * as AlbumActions from './albumActions'
import * as AlbumApi from './albumApi'

export const fetchAlbums = () => async (dispatch) => {
    try {
        dispatch(AlbumActions.loadingRequest());
        const res = await AlbumApi.fetchAlbums();
        dispatch(AlbumActions.fetchSuccess(res.data));
    } catch (e) {
        dispatch(AlbumActions.fetchError())
    }

}