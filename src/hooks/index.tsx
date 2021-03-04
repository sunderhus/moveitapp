import React from 'react';
import {ChallengeProvider} from './challenge';
import {CountDownProvider} from './countdown';
import {TheSwitcherProvider} from './themeSwitcher';

const AppProvider: React.FC = ({children}) => {
  return (
    <TheSwitcherProvider>
      <ChallengeProvider>
        <CountDownProvider>{children}</CountDownProvider>
      </ChallengeProvider>
    </TheSwitcherProvider>
  );
};

export default AppProvider;
