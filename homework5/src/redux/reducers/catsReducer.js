import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const FETCH_CATS_REQUEST = 'FETCH_CATS_REQUEST';
const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
const FETCH_CATS_FAILURE = 'FETCH_CATS_FAILURE';

export default function catsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_CATS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_CATS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const fetchCats = () => async dispatch => {
    dispatch({ type: FETCH_CATS_REQUEST });
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=9');
        dispatch({ type: FETCH_CATS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_CATS_FAILURE, payload: error.message });
    }
};
