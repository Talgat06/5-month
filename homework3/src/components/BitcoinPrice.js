import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBitcoinData } from '../redux/actions/bitcoinActions';

const BitcoinPrice = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.bitcoin);

    useEffect(() => {
        dispatch(fetchBitcoinData());
    }, [dispatch]);

    if (loading) {
        return <div style={{color: '#f10000'}}>Loading...</div>;
    }
    if (error) {
        return <div style={{color: '#f10000'}}>Error: {error}</div>;
    }

    return (
        <div>
            <ul className='bitcoin-block'>
                {data.map((bitcoin) => (
                    <li key={bitcoin.id}
                        className='bitcoin-info'
                    >
                        <div className="text-content
                        ">
                            <h3>{bitcoin.name}</h3>
                            <p>Price: ${bitcoin.current_price}</p>
                            <p>Market Cap: ${bitcoin.market_cap}</p>
                            <p>24h Change: {bitcoin.price_change_percentage_24h}%</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BitcoinPrice;
