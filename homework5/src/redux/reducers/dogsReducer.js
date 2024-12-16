import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const FETCH_DOGS_REQUEST = 'FETCH_DOGS_REQUEST';
const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE';

export default function dogsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DOGS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_DOGS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DOGS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const fetchDogs = () => async dispatch => {
    dispatch({ type: FETCH_DOGS_REQUEST });
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/9');
        dispatch({ type: FETCH_DOGS_SUCCESS, payload: response.data.message });
    } catch (error) {
        dispatch({ type: FETCH_DOGS_FAILURE, payload: error.message });
    }
};
