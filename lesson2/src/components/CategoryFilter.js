import React from 'react';
import {useSelector} from "react-redux";

const CategoryFilter = ({onChange}) => {
    const categories = useSelector(state => state.categoriesReducer)

    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option>All Categories</option>
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;