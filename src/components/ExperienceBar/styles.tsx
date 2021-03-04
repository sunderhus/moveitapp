import styled from 'styled-components/native';
import {Colors, Fonts} from '../../styles/global';

export const ExperienceBarContainer = styled.SafeAreaView`
  flex: 1;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ExperienceText = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.inter.regular};
  color: ${({theme}) => theme.colors.text};
`;

export const ProgressContainer = styled.View`
  flex: 1;
  margin: 0 16px;
  border-radius: 4px;
  position: relative;
  background: ${Colors.greyLine};
`;
export const ExperienceLine = styled.View`
  height: 4px;
  position: absolute;
`;

export const Progress = styled.View`
  height: 4px;
  border-radius: 4px;
  background: ${Colors.green};
`;

export const CurrentExperience = styled(ExperienceText)`
  position: absolute;
  top: 4px;
  font-family: ${Fonts.inter.bold};
`;
