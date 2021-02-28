import React, {useCallback} from 'react';
import View from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';
import {useChallenge} from '../../hooks/challenge';
import {useCountdown} from '../../hooks/countdown';

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

  return <View />;
};

export default ChallengeBox;
