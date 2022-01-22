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
    <div className="text-xl w-1/3 text-center">
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="py-1 px-3 border border-black rounded"
      />
      <button
        type="button"
        className="py-1 px-3 ml-4 text-white bg-blue-400 hover:bg-blue-500 border-blue-500 border-2 rounded"
        onClick={handleCitySearch}
      >
        Go
      </button>
    </div>
  );
};

export default CityInput;
