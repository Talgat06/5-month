import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchUsers} from "../redux/reducers/actions";

const SearchBar = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        if (query.trim()) {
            dispatch(fetchUsers(query))
        }
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GitHub users..."
            />
            <button type={"submit"}>Search</button>
        </form>
    );
};

export default SearchBar;