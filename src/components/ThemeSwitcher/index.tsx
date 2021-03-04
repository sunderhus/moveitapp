import React from 'react';
import {useThemeSwitcher} from '../../hooks/themeSwitcher';
import {DarkTheme} from '../../styles/themes';
import {Switcher} from './styles';

const ThemeSwitcher: React.FC = () => {
  const {theme, toggleTheme} = useThemeSwitcher();

  return (
    <Switcher
      value={theme.title === DarkTheme.title}
      onValueChange={toggleTheme}
      thumbColor={theme.colors.challengeBoxBackground}
    />
  );
};

export default ThemeSwitcher;
