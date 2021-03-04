import styled from 'styled-components/native';
import {Fonts} from '../../styles/global';

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.overlay};
  justify-content: center;
  align-items: center;
`;
export const ModalLevelUp = styled.ImageBackground`
  position: relative;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.challengeBoxBackground};
  border-radius: 4px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 32px 40px;
  max-height: 70%;
`;

export const ModalCloseButton = styled.Pressable`
  position: absolute;
  top: 0;
  right: 0;
`;
export const ModalLevelUpNumber = styled.Text`
  font-size: 72px;
  font-family: ${Fonts.inter.regular};
  color: ${({theme}) => theme.colors.secundary};
`;
export const Title = styled.Text`
  font-size: 32px;
  font-family: ${Fonts.inter.regular};
  color: ${(props) => props.theme.colors.text};
`;
export const Description = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.inter.regular};
  color: ${({theme}) => theme.colors.text};
`;
