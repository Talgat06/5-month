import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBitcoin } from '../redux/reducers/bitcoinReducer';

const Bitcoin = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.bitcoin);

    useEffect(() => {
        dispatch(fetchBitcoin());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bitcoin-block">
            <h1>Bitcoin</h1>
            <p>USD: ${data?.USD?.rate}</p>
            <p>GBP: £{data?.GBP?.rate}</p>
            <p>EUR: €{data?.EUR?.rate}</p>
        </div>
    );
};

export default Bitcoin;
