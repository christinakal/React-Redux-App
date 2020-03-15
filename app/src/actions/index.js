import axios from 'axios';

// const API_KEY = '4e28f86a9918b3e454d504897c997371';
//http://api.flickr.com/services/rest/?api_key=4e28f86a9918b3e454d504897c997371&method=flickr.photos.getRecent&format=json&nojsoncallback=true&extras=url_m&safe_search=true

export const fetchPhotos = () => dispatch => {
    dispatch({ type: "FETCHING_PHOTOS_START"});
    axios
        .get('https://pixabay.com/api/?key=8756254-0cf3f23edfe3f173675b48589&image_type=all')
        .then(res => {
            console.log(res.data.hits);
            dispatch({ type: 'FETCHING_PHOTOS_SUCCESS', payload: res.data.hits})
        })
        .catch(err => console.log(err));
}
