import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../redux/reducers/catsReducer';

const Cats = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.cats);

    useEffect(() => {
        dispatch(fetchCats());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="cat">
            <h1 style={{ textAlign: 'center' }}>Cats</h1>
            <ul className="cat-cards">
                {data.map((cat, index) => (
                    <li key={index}>
                        <img src={cat.url} alt="cat" style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cats;
