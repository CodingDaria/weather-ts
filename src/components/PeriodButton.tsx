import React from 'react';

interface Props {
  period: string;
}

const PeriodButton: React.FC<Props> = ({ period }) => {
  return (
    <button type="button" className="text-xl">
      {period}
    </button>
  );
};

export default PeriodButton;
