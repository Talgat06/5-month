import axios from 'axios';

const initialState = {
    data: {},
    loading: false,
    error: null,
};

const FETCH_BITCOIN_REQUEST = 'FETCH_BITCOIN_REQUEST';
const FETCH_BITCOIN_SUCCESS = 'FETCH_BITCOIN_SUCCESS';
const FETCH_BITCOIN_FAILURE = 'FETCH_BITCOIN_FAILURE';

export default function bitcoinReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BITCOIN_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_BITCOIN_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_BITCOIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const fetchBitcoin = () => async dispatch => {
    dispatch({ type: FETCH_BITCOIN_REQUEST });
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        dispatch({ type: FETCH_BITCOIN_SUCCESS, payload: response.data.bpi });
    } catch (error) {
        dispatch({ type: FETCH_BITCOIN_FAILURE, payload: error.message });
    }
};
