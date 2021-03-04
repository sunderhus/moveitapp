import React from 'react';
import ChallengeBox from '../../components/ChallengeBox';
import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/CountDown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import {Container, MainSection} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <MainSection>
        <ThemeSwitcher />
        <ExperienceBar />
        <Profile />
        <CompletedChallenges />

        <Countdown />

        <ChallengeBox />
      </MainSection>
    </Container>
  );
};
export default Home;
