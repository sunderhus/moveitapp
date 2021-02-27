import React from 'react';
import {
  CurrentExperience,
  ExperienceBarContainer,
  ExperienceLine,
  ExperienceText,
  Progress,
  ProgressContainer,
} from './styles';

const ExperienceBar: React.FC = () => {
  const percentualToNextLevel = Math.round(20 * 100) / 64;

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
            10 xp
          </CurrentExperience>
        </ProgressContainer>
        <ExperienceText>64 xp</ExperienceText>
      </ExperienceBarContainer>
    </>
  );
};

export default ExperienceBar;
