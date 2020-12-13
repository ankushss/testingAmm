import * as PhotosActions from './photosActions'
import * as PhotosApi from './photosApi'

export const fetchPhotos = (id) => async (dispatch) => {
    try {
        dispatch(PhotosActions.loadingRequest());
        const res = await PhotosApi.fetchPhotos(id);
        dispatch(PhotosActions.fetchSuccess(res.data));
    } catch (e) {
        dispatch(PhotosActions.fetchError())
    }
}