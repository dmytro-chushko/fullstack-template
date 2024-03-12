import { ThemeSwitcher } from '../ThemeSwitcher';
import { HeaderBox } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <ThemeSwitcher />
    </HeaderBox>
  );
};
