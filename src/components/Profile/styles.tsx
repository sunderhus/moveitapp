import styled from 'styled-components/native';
import {Fonts, Colors} from '../../styles/global';

export const ProfileContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 24px;
`;

export const ProfileImage = styled.Image`
  border-radius: 64px;
  height: 64px;
  width: 64px;
`;

export const ProfileInfos = styled.View`
  flex: 1;
  margin-left: 32px;
`;

export const ProfileName = styled.Text`
  font-size: 24px;
`;

export const ProfileLevelContainer = styled.View`
  flex-flow: row;
  margin-top: 8px;
`;

export const Level = styled.Text`
  font-family: ${Fonts.inter.regular};
  color: ${Colors.text};
  margin-left: 4px;
`;
