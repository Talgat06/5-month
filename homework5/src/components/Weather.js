import React, { useState } from 'react';

const Weather = () => {
    const [cityName, setCityName] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const API_KEY = 'e417df62e04d3b1b111abeab19cea714';
    const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

    const handleInputChange = async (event) => {
        const input = event.target.value;
        setCityName(input);

        if (input.trim()) {
            try {
                const response = await fetch(
                    `${BASE_URL}?q=${input}&appid=${API_KEY}&units=metric`
                );
                const data = await response.json();
                setCity(data.name || 'Город не найден');
                setTemp(
                    data.main?.temp
                        ? `${Math.round(data.main.temp)}°C`
                        : 'Температура не определена'
                );
            } catch (error) {
                console.error(error);
            }
        } else {
            setCity('');
            setTemp('');
        }
    };

    return (
        <div>
            <h1>Weather</h1>
            <input
                className="input"
                type="text"
                placeholder="Search city 🔍"
                value={cityName}
                onChange={handleInputChange}
            />
            <div className="weatherInfo">
                <p className="city">{city}</p>
                <p className="temp">{temp}</p>
            </div>
        </div>
    );
};

export default Weather;
