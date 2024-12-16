import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from '../redux/reducers/dogsReducer';

const Dogs = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.dogs);

    useEffect(() => {
        dispatch(fetchDogs());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="dog">
            <h1 style={{ textAlign: 'center' }}>Dogs</h1>
            <ul className="dog-cards">
                {data.map((dog, index) => (
                    <li key={index}>
                        <img src={dog} alt="dog" style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dogs;
