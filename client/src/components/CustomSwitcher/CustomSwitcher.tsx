import { SwitcherBox, SwitcherTrigger } from './CustomSwitcher.styled';

interface ICustomSwitcherProps {
  isTurnedOn?: boolean;
  onClick?: () => void;
}

export const CustomSwitcher = ({
  isTurnedOn = false,
  onClick,
}: ICustomSwitcherProps) => {
  return (
    <SwitcherBox onClick={onClick}>
      <SwitcherTrigger $isTurnedOn={isTurnedOn} />
    </SwitcherBox>
  );
};
