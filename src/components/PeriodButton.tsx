import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  link: string;
}

const PeriodButton: React.FC<Props> = ({ name, link }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(link)}
      className="text-xl py-1 px-3 bg-indigo-500 hover:bg-indigo-400 hover:text-white rounded-t-lg"
    >
      {name}
    </button>
  );
};

export default PeriodButton;
