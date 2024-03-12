import { useState } from 'react';
import {
  SwitcherBox,
  SwitcherInput,
  SwitcherLabel,
  SwitcherTrigger,
} from './CustomSwitcher.styled';

interface ICustomSwitcherProps {
  isTurnedOn?: boolean;
  onSwitch?: () => void;
}

export const CustomSwitcher = ({
  isTurnedOn = false,
  onSwitch,
}: ICustomSwitcherProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(isTurnedOn || false);

  const handleClick = () => setIsChecked(!isChecked);

  return (
    <SwitcherLabel>
      <SwitcherBox isTurnedOn={isTurnedOn} disabled={false}>
        <SwitcherInput
          type="checkbox"
          checked={isChecked}
          onClick={handleClick}
          onChange={onSwitch}
        />
        <SwitcherTrigger />
      </SwitcherBox>
    </SwitcherLabel>
  );
};
