import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';
import {Colors, Fonts} from '../../styles/global';

interface ICountDownButtonDisabledProps {
  borderColor: string;
}

interface ICountDownButtonProps {
  backgroundVariation: string;
}

interface ICountDownButtonTextProps {
  customColor: string;
}

export const Container = styled.View`
  flex: 1;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  font-family: ${Fonts.rajdhani.bold};
`;

export const CountdownCardsGroup = styled.View`
  flex: 1;
  flex-flow: row;
  justify-content: space-evenly;
  background: ${Colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

export const CountdownCard = styled.Text`
  font-size: 82px;
`;

export const Line = styled.View`
  background: #f0f1f3;
  flex: 1;
  max-width: 2px;
`;

export const CountdownSeparator = styled.Text`
  font-size: 82px;
  margin: 0 8px;
`;

export const ICountDownButtonDisabledProps = styled(
  TouchableWithoutFeedback,
)<ICountDownButtonDisabledProps>`
  flex: 1;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  height: 64px;
  margin-top: 32px;
  background: ${Colors.white};
  color: ${Colors.title};

  ${({borderColor}) =>
    borderColor &&
    css`
      border-bottom-width: 2px;
      border-color: ${borderColor};
    `}
`;
export const CountdownButton = styled(TouchableOpacity)<ICountDownButtonProps>`
  flex: 1;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  height: 64px;
  margin-top: 32px;
  background: ${Colors.white};
  color: ${Colors.title};
  background: ${(props) => `${props.backgroundVariation}`};
`;

export const CountdownButtonText = styled.Text<ICountDownButtonTextProps>`
  font-size: 16px;
  font-family: ${Fonts.inter.semiBold};
  color: ${(props) => `${props.customColor}`};
`;
