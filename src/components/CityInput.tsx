import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCityWeather } from '../store/reducers/weather/weather.actions';

const CityInput: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [city, setCity] = useState('');

  const handleCitySearch = () => {
    dispatch(getCityWeather(city, () => navigate('/current')));
  };

  return (
    <div className="text-xl">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border border-black"
      />
      <button type="button" onClick={handleCitySearch}>
        Go
      </button>
      <p>CityInput</p>
    </div>
  );
};

export default CityInput;
