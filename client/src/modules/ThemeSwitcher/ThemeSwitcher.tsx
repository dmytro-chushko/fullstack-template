import { CustomSwitcher } from 'src/components';
import {
  useGetThemeState,
  useSetThemeLight,
} from 'src/redux/reducers/themeState';

export const ThemeSwitcher = () => {
  const isDark = useGetThemeState();
  const setThemeLight = useSetThemeLight();

  const handleSwitchTheme = () => setThemeLight(!isDark);

  return <CustomSwitcher isTurnedOn={isDark} onClick={handleSwitchTheme} />;
};
