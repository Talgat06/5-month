import axios from 'axios';

const initialState = {
    data: {},
    loading: false,
    error: null,
};

const FETCH_NASA_REQUEST = 'FETCH_NASA_REQUEST';
const FETCH_NASA_SUCCESS = 'FETCH_NASA_SUCCESS';
const FETCH_NASA_FAILURE = 'FETCH_NASA_FAILURE';

export default function nasaReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NASA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_NASA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_NASA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const fetchNasa = () => async dispatch => {
    dispatch({ type: FETCH_NASA_REQUEST });
    try {
        const response = await axios.get(
            'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        );
        dispatch({ type: FETCH_NASA_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_NASA_FAILURE, payload: error.message });
    }
};
