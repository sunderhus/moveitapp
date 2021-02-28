import React from 'react';
import {useChallenge} from '../../hooks/challenge';
import {ChallengesNumber, ChallengesText, Container} from './styles';

const CompletedChallenges: React.FC = () => {
  const {challengesCompleted} = useChallenge();
  return (
    <Container>
      <ChallengesText>Desafios completos</ChallengesText>
      <ChallengesNumber>{challengesCompleted}</ChallengesNumber>
    </Container>
  );
};

export default CompletedChallenges;
