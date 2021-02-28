import React, {useCallback} from 'react';
import {Text} from 'react-native';
import BodyIcon from '../../assets/icons/body.svg';
import LevelUpIcon from '../../assets/icons/level-up.svg';
import {useChallenge} from '../../hooks/challenge';
import {useCountdown} from '../../hooks/countdown';
import {Colors} from '../../styles/global';
import {
  ChallengeActive,
  ChallengeActiveFooter,
  ChallengeActiveHeader,
  ChallengeActiveMain,
  ChallengeButton,
  ChallengeButtonText,
  ChallengeDescription,
  ChallengeNotActive,
  Container,
  NotActiveSubTitle,
  NotActiveTitle,
} from './styles';

const ChallengeBox: React.FC = () => {
  const {activeChallenge, resetChallenge, completeChallenge} = useChallenge();
  const {resetCountdown} = useCountdown();

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge();
    resetCountdown();
  }, [completeChallenge, resetCountdown]);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountdown();
  }, [resetChallenge, resetCountdown]);

  return (
    <Container>
      {activeChallenge.amount ? (
        <ChallengeActive>
          <ChallengeActiveHeader>{`Ganhe ${activeChallenge.amount}xp`}</ChallengeActiveHeader>
          <ChallengeActiveMain>
            <BodyIcon />
            <Text style={{textAlign: 'center', fontSize: 24}}>
              Novo Desafio
            </Text>
            <ChallengeDescription>
              {activeChallenge.description}
            </ChallengeDescription>
          </ChallengeActiveMain>

          <ChallengeActiveFooter>
            <ChallengeButton
              customBackgroundColor={`${Colors.red}`}
              onPress={handleChallengeFailed}>
              <ChallengeButtonText>Falhei</ChallengeButtonText>
            </ChallengeButton>
            <ChallengeButton
              customBackgroundColor={`${Colors.green}`}
              onPress={handleChallengeSucceeded}>
              <ChallengeButtonText>Completei</ChallengeButtonText>
            </ChallengeButton>
          </ChallengeActiveFooter>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <NotActiveTitle>
            Finalize um ciclo para receber um desafio
          </NotActiveTitle>
          <LevelUpIcon />
          <NotActiveSubTitle>
            Avance de level completando desafios.
          </NotActiveSubTitle>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;
