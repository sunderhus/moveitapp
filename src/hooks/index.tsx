import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {DarkTheme} from '../styles/themes';
import {ChallengeProvider} from './challenge';
import {CountDownProvider} from './countdown';

const AppProvider: React.FC = ({children}) => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <ChallengeProvider>
        <CountDownProvider>{children}</CountDownProvider>
      </ChallengeProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
