import React from 'react';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
      <Profile />
    </Container>
  );
};
export default Home;
