import axios from 'axios'

export const fetchAlbums = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return res;
}