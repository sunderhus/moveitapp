import React from 'react';
import {useThemeSwitcher} from '../../hooks/themeSwitcher';
import {DarkTheme, LightTheme} from '../../styles/themes';
import {Switcher} from './styles';

const ThemeSwitcher: React.FC = () => {
  const {theme, toggleTheme} = useThemeSwitcher();

  return (
    <Switcher
      value={theme === DarkTheme}
      onValueChange={toggleTheme}
      thumbColor={theme.colors.challengeBoxBackground}
    />
  );
};

export default ThemeSwitcher;
