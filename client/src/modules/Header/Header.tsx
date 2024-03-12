import { ThemeSwitcher } from '../ThemeSwitcher';
import { HeaderBox } from './Header.styled';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export const Header = () => {
  return (
    <HeaderBox>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </HeaderBox>
  );
};
