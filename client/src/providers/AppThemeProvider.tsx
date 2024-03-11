import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { useGetThemeState } from 'src/redux/reducers/themeState';
import { theme } from 'src/styles/theme.styled';

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
  const isDark = useGetThemeState();
  const currentTheme = useMemo(() => theme(isDark), [isDark]);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
