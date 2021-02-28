import React from 'react';
import ChallengeBox from '../../components/ChallengeBox';
import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/CountDown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import AppProvider from '../../hooks';
import {Container, MainSection} from './styles';

const Home: React.FC = () => {
  return (
    <AppProvider>
      <Container>
        <MainSection>
          <ExperienceBar />
          <Profile />
          <CompletedChallenges />

          <Countdown />

          <ChallengeBox />
        </MainSection>
      </Container>
    </AppProvider>
  );
};
export default Home;
