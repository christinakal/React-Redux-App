import axios from 'axios';

// const API_KEY = '4e28f86a9918b3e454d504897c997371';

export const fetchPhotos = () => dispatch => {
    dispatch({ type: "FETCHING_PHOTOS_START"});
    axios
        .get('http://api.flickr.com/services/rest/?api_key=4e28f86a9918b3e454d504897c997371&method=flickr.photos.getRecent&format=json&nojsoncallback=true&extras=url_m&safe_search=true')
        .then(res => {
            console.log(res.data.photos.photo);
            dispatch({ type: 'FETCHING_PHOTOS_SUCCESS', payload: res.data.photos.photo})
        })
        .catch(err => console.log(err));
}
