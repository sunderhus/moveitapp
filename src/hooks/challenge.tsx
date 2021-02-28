import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {Challenges} from '../../challenges';

interface IChallenge {
  type: string;
  description: string;
  amount: number;
}

interface IChallengeContext {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  experienceToNextLevel: number;
  startNewChallenge(): void;
  resetChallenge(): void;
  completeChallenge(): void;
  closeLevelUpModal(): void;
}

const ChallengeContext = createContext<IChallengeContext>(
  {} as IChallengeContext,
);

const ChallengeProvider: React.FC = ({children}) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState({} as IChallenge);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [experienceToNextLevel, setExperienceToNetLevel] = useState(() => {
    return Math.pow((level + 1) * 4, 2);
  });

  useEffect(() => {
    setExperienceToNetLevel(Math.pow((level + 1) * 4, 2));
  }, [level]);

  useEffect(() => {
    async function loadProfileInformations(): Promise<void> {
      const loadedLevel = await AsyncStorage.getItem('level');
      const loadedCurrentExperience = await AsyncStorage.getItem(
        'currentExperience',
      );
      const loadedChallengesCompleted = await AsyncStorage.getItem(
        'challengesCompleted',
      );

      if (
        !loadedLevel ||
        !loadedCurrentExperience ||
        !loadedChallengesCompleted
      ) {
        return;
      }

      setLevel(Number(loadedLevel));
      setChallengesCompleted(Number(loadedChallengesCompleted));
      setCurrentExperience(Number(loadedCurrentExperience));
    }
    loadProfileInformations();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('level', String(level));
    AsyncStorage.setItem('currentExperience', String(currentExperience));
    AsyncStorage.setItem('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const levelUp = useCallback(
    (newlevel: number) => {
      if (newlevel > level) {
        setLevel(newlevel ?? level + 1);

        if (!isLevelUpModalOpen) {
          setIsLevelUpModalOpen(true);
        }
      }
    },
    [level, isLevelUpModalOpen],
  );

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * Challenges.length);
    const challenge = Challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }, []);

  const resetChallenge = useCallback(() => {
    setActiveChallenge({} as IChallenge);
  }, []);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const {amount} = activeChallenge;
    let finalExperience = currentExperience + amount;
    let finalLevel = level;

    while (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      finalLevel++;
    }

    levelUp(finalLevel);

    setCurrentExperience(finalExperience);
    setActiveChallenge({} as IChallenge);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    experienceToNextLevel,
    activeChallenge,
    challengesCompleted,
    currentExperience,
    level,
    levelUp,
  ]);

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
      }}>
      {children}
    </ChallengeContext.Provider>
  );
};

const useChallenge = (): IChallengeContext => {
  const context = useContext(ChallengeContext);
  if (!context) {
    throw Error('useChallenge must be within a ChallengeProvider');
  }
  return context;
};

export {ChallengeProvider, useChallenge};
