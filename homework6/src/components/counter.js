
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByTen, decrementByTen, reset } from '../store/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className='counter-card'>
                <div className="bg">
                    <h1>Счётчик: {count}</h1>
                    <button onClick={() => dispatch(increment())}>+1</button>
                    <button onClick={() => dispatch(incrementByTen())}>+10</button>
                    <button onClick={() => dispatch(decrement())}>-1</button>
                    <button onClick={() => dispatch(decrementByTen())}>-10</button>
                    <button onClick={() => dispatch(reset())}>Сброс</button>
                </div>
                <div className="blob"></div>
            </div>
        </div>
    );
};

export default Counter;
