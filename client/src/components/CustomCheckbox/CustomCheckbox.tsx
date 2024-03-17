import { Checkbox, CheckboxProps } from '@mui/material';
import {
  CustomCheckboxCheckedIcon,
  CustomCheckboxIcon,
} from 'src/styles/ui/checkbox';

export const CustomCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox
      {...props}
      disableRipple
      icon={<CustomCheckboxIcon />}
      checkedIcon={<CustomCheckboxCheckedIcon />}
    />
  );
};
