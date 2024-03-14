import { ReactComponent as Moon } from 'src/assets/moon.svg';
import { ReactComponent as Sun } from 'src/assets/sun.svg';
import {
  useGetThemeState,
  useSetThemeLight,
} from 'src/redux/reducers/themeState';

import * as Styled from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
  const isDark = useGetThemeState();
  const setThemeLight = useSetThemeLight();

  const handleSwitchTheme = () => setThemeLight(!isDark);

  return (
    <Styled.Wrapper onClick={handleSwitchTheme}>
      {isDark ? (
        <Moon width="1.5rem" height="1.5rem" />
      ) : (
        <Sun width="1.5rem" height="1.5rem" />
      )}
    </Styled.Wrapper>
  );
};
