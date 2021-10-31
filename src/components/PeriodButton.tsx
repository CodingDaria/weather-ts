import React from 'react';

type Props = {
  period: string;
}

const PeriodButton: React.FC<Props> = ({ period }) => {
  console.log(period);

  return <div className="text-xl">PeriodButton</div>;
};

export default PeriodButton;