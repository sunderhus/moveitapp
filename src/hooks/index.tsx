import React from 'react';
import {ChallengeProvider} from './challenge';
import {CountDownProvider} from './countdown';

const AppProvider: React.FC = ({children}) => {
  return (
    <ChallengeProvider>
      <CountDownProvider>{children}</CountDownProvider>
    </ChallengeProvider>
  );
};

export default AppProvider;
