import styled from 'styled-components/native';
import {Colors, Fonts} from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  flex-flow: row;
  justify-content: space-between;
  margin: 32px 0;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${Colors.greyLine};
  padding-bottom: 16px;
`;

export const ChallengesText = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.inter.regular};
  color: ${Colors.title};
`;

export const ChallengesNumber = styled.Text`
  font-size: 24px;
  font-family: ${Fonts.inter.regular};
  color: ${Colors.title};
`;
