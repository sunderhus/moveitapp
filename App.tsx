import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import AppProvider from './src/hooks';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
