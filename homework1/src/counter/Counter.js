
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const increment = (value) => dispatch({ type: 'INCREMENT', payload: value });
    const decrement = (value) => dispatch({ type: 'DECREMENT', payload: value });
    const reset = () => dispatch({ type: 'RESET' });

    return (
        <div style={{ textAlign: 'center'}}>
            <div>
                <button onClick={() => decrement(1)}>-1</button>
                <button onClick={() => decrement(10)}>-10</button>
                {count}
                <button onClick={() => increment(1)}>+1</button>
                <button onClick={() => increment(10)}>+10</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    );
};

export default Counter;
