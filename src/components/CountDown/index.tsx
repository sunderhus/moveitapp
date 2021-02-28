import React from 'react';
import {Container} from './styles';

const Countdown: React.FC = () => {
  const minutes = 25 * 60;
  const seconds = minutes % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return <Container />;
};

export default Countdown;
