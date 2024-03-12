import {
  useGetThemeState,
  useSetThemeLight,
} from 'src/redux/reducers/themeState';
import { ReactComponent as Sun } from 'src/assets/sun.svg';
import { ReactComponent as Moon } from 'src/assets/moon.svg';

import * as Styled from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
  const isDark = useGetThemeState();
  const setThemeLight = useSetThemeLight();

  const handleSwitchTheme = () => setThemeLight(!isDark);

  return (
    <Styled.Wrapper onClick={handleSwitchTheme}>
      {isDark ? <Moon /> : <Sun />}
    </Styled.Wrapper>
  );
};
