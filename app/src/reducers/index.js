const initialState = {
    isLoading: false,
    photos: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_PHOTOS_START":
            return {
                ...state,
                isLoading: true
            };
        case "FETCHING_PHOTOS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                photos: action.payload
            }
        default:
            return state;
    }
}

export default reducer;