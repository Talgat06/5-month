import axios from 'axios';

export const fetchBitcoinData = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                ids: 'bitcoin,ethereum,litecoin,ripple,cardano,dogecoin,solana,binancecoin,uniswap,chainlink,polkadot,binancecoin,vechain,stellar,monero,tron,chainlink,',
            },
        });

        dispatch({
            type: 'FETCH_BITCOIN_DATA_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_BITCOIN_DATA_FAILURE',
            payload: error.message,
        });
    }
};
