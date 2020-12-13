import axios from 'axios'

export const fetchPhotos = async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/album/${id}/photos`);
    return res;
}