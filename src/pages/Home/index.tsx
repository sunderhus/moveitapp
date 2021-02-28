import React from 'react';
import CompletedChallenges from '../../components/CompletedChallenges';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
      <Profile />
      <CompletedChallenges />
    </Container>
  );
};
export default Home;
