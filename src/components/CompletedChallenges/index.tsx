import React from 'react';
import {ChallengesNumber, ChallengesText, Container} from './styles';

const CompletedChallenges: React.FC = () => {
  return (
    <Container>
      <ChallengesText>Desafios completos</ChallengesText>
      <ChallengesNumber> 1 </ChallengesNumber>
    </Container>
  );
};

export default CompletedChallenges;
