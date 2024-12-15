import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { fetchJoke } from '../redux/Actions';

const JokePage = () => {

    const joke = useSelector(state => state.catReducer.joke)
    const dispatch = useDispatch();


    return (
        <div>
            <h2>Random Jokes</h2>
            <Button onClick={() => dispatch(fetchJoke())}>Get a Joke</Button>
            {joke && <p className='mt-3'>{joke}</p>}
        </div>
    )
}

export default JokePage