import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {DefaultTheme, ThemeProvider} from 'styled-components/native';
import {DarkTheme, LightTheme} from '../styles/themes';

interface IThemeSwitcherContext {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

const ThemeSwitcherContext = createContext<IThemeSwitcherContext>(
  {} as IThemeSwitcherContext,
);

const TheSwitcherProvider: React.FC = ({children}) => {
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(DarkTheme);

  useEffect(() => {
    async function loadPersistedTheme() {
      const loadedTheme = await AsyncStorage.getItem('@selectedTheme');

      if (loadedTheme) {
        const parsedTheme = JSON.parse(loadedTheme);
        setSelectedTheme(parsedTheme);
        return;
      }
      setSelectedTheme(DarkTheme);
    }

    loadPersistedTheme();
  }, []);

  useEffect(() => {
    async function persistSelectedTheme() {
      await AsyncStorage.setItem(
        '@selectedTheme',
        JSON.stringify(selectedTheme),
      );
    }

    persistSelectedTheme();
  }, [selectedTheme]);

  const handleToggleTheme = useCallback(() => {
    if (selectedTheme === LightTheme) {
      setSelectedTheme(DarkTheme);
      return;
    }

    setSelectedTheme(LightTheme);
  }, [selectedTheme]);

  return (
    <ThemeSwitcherContext.Provider
      value={{toggleTheme: handleToggleTheme, theme: selectedTheme}}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

const useThemeSwitcher = (): IThemeSwitcherContext => {
  const context = useContext(ThemeSwitcherContext);

  if (!context) {
    throw Error('useThemeSwitcher must be within a TheSwitcherProvider');
  }

  return context;
};
export {TheSwitcherProvider, useThemeSwitcher};
