import axios from 'axios';

const initialState = {
    data: {},
    loading: false,
    error: null,
};

const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_WEATHER_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_WEATHER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const fetchWeatherByCountry = (country) => async (dispatch) => {
    dispatch({ type: FETCH_WEATHER_REQUEST });
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=YOUR_API_KEY`
        );
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({
            type: FETCH_WEATHER_FAILURE,
            payload: error.response?.data?.message || 'Error fetching weather',
        });
    }
};
