import styled from 'styled-components/native';

export const ExperienceBarContainer = styled.SafeAreaView`
  flex: 1;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ExperienceText = styled.Text`
  font-size: 16px;
`;

export const ProgressContainer = styled.View`
  flex: 1;
  margin: 0 16px;
  border-radius: 4px;
  position: relative;
  background: grey;
`;
export const ExperienceLine = styled.View`
  height: 4px;
  position: absolute;
`;

export const Progress = styled.View`
  height: 4px;
  border-radius: 4px;
  background: #4cd62b;
`;

export const CurrentExperience = styled.Text`
  font-size: 16px;
  position: absolute;
  top: 4px;
`;
