import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser, updateUser, setFilter } from '../redux/actions';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('Обычный');
    const users = useSelector((state) => state.users);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const filteredUsers = users.filter((user) =>
        filter === 'ALL' || user.type === filter
    );

    const handleAdd = () => {
        if (name && type) {
            const newUser = { id: Date.now(), name, type };
            dispatch(addUser(newUser));
            setName('');
            setType('Обычный');
        }
    };

    return (
        <div className="todo-list">
            <h1>TodoList</h1>
            <input
                className="todo-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя пользователя"
            />
            <select className="todo-select" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Обычный">Обычный</option>
                <option value="Пользователь">Пользователь</option>
                <option value="Бизнес">Бизнес</option>
                <option value="Инвестиции">Инвестиции</option>
            </select>
            <button onClick={handleAdd} className="add">Добавить</button>

            <div className="filter-block">
                <label htmlFor="filter">Фильтр:</label>
                <select className="filter-select"
                    id="filter"
                    value={filter}
                    onChange={(e) => dispatch(setFilter(e.target.value))}
                >
                    <option value="ALL">Все</option>
                    <option value="Обычный">Обычный</option>
                    <option value="Пользователь">Пользователь</option>
                    <option value="Бизнес">Бизнес</option>
                    <option value="Инвестиции">Инвестиции</option>
                </select>
            </div>

            <div className="block3">
                {filteredUsers.map((user) => (
                    <TodoItem
                        key={user.id}
                        user={user}
                        onDelete={(id) => dispatch(removeUser(id))}
                        onUpdate={(updatedUser) => dispatch(updateUser(updatedUser))}
                    />
                ))}
            </div>
        </div>
    );
};
