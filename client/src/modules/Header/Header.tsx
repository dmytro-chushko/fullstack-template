import { ThemeSwitcher } from './components';
import { LanguageSwitcher } from './components';

import { HeaderBox } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </HeaderBox>
  );
};
