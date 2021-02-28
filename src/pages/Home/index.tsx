import React from 'react';
import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/CountDown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
      <Profile />
      <CompletedChallenges />

      <Countdown />
    </Container>
  );
};
export default Home;
