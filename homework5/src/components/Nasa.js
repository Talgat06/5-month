import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNasa } from '../redux/reducers/nasaReducer';

const Nasa = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.nasa);

    useEffect(() => {
        dispatch(fetchNasa());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="moon-block">
            <h1>Picture of the Moon</h1>
            <img src={data.url} alt={data.title} style={{ width: '100vh', maxHeight: '100vh', objectFit: 'cover' }} />
            <h2>{data.title}</h2>
            <p style={{width: '818px'}}>{data.explanation}</p>
        </div>
    );
};

export default Nasa;
