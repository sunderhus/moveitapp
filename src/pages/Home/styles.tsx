import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 20px;
  background: ${(props) => props.theme.colors.background};
`;

export const MainSection = styled.ScrollView`
  flex: 1;
`;
