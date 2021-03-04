import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Colors, Fonts} from '../../styles/global';

interface IChallengeButtonProps {
  customBackgroundColor: string;
}

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.challengeBoxBackground};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 16px 32px;
`;

export const ChallengeNotActive = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const NotActiveTitle = styled.Text`
  text-align: center;
  font-family: ${Fonts.inter.semiBold};
  font-size: 24px;
  margin-bottom: 16px;
  flex-flow: row;
  color: ${(props) => props.theme.colors.title};
`;
export const NotActiveSubTitle = styled.Text`
  flex-flow: row;
  align-items: center;
  text-align: center;
  max-width: 70%;
  margin-top: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export const ChallengeActive = styled.View`
  flex: 1;
`;

export const ChallengeActiveHeader = styled.Text`
  text-align: center;
  flex: 1;
  flex-flow: row;
  color: ${(props) => props.theme.colors.secundary};

  border-bottom-width: 1px;
  border-bottom-color: ${Colors.greyLine};
  font-family: ${Fonts.inter.semiBold};
  font-size: 16px;
  padding-bottom: 8px;
  width: 100%;
`;
export const ChallengeActiveMain = styled.View`
  margin-top: 16px;
  flex: 1;
  align-items: center;
`;

export const ChallengeDescription = styled.Text`
  font-family: ${Fonts.inter.regular};
  font-size: 16px;
  color: ${(props) => props.theme.colors.title};

  text-align: center;
`;

export const ChallengeActiveFooter = styled.View`
  flex: 1;
  margin-top: 8px;
  flex-flow: row;
  justify-content: space-between;
`;

export const ChallengeButton = styled(TouchableOpacity)<IChallengeButtonProps>`
  justify-content: center;
  background-color: ${({customBackgroundColor}) => customBackgroundColor};
`;
export const ChallengeButtonText = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.inter.semiBold};
  padding: 8px 2px;
  text-align: center;
  width: 140px;
`;
