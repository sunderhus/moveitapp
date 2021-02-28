import React from 'react';
import {useChallenge} from '../../hooks/challenge';
import {
  CurrentExperience,
  ExperienceBarContainer,
  ExperienceLine,
  ExperienceText,
  Progress,
  ProgressContainer,
} from './styles';

const ExperienceBar: React.FC = () => {
  const {experienceToNextLevel, currentExperience} = useChallenge();

  const percentualToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <>
      <ExperienceBarContainer>
        <ExperienceText>0 xp</ExperienceText>
        <ProgressContainer>
          <ExperienceLine />
          <Progress style={{width: `${percentualToNextLevel}%`}} />

          <CurrentExperience
            style={{
              left: `${percentualToNextLevel}%`,
              transform: [{translateX: -16}],
            }}>
            {`${currentExperience}xp`}
          </CurrentExperience>
        </ProgressContainer>
        <ExperienceText>{`${experienceToNextLevel}xp`}</ExperienceText>
      </ExperienceBarContainer>
    </>
  );
};

export default ExperienceBar;
