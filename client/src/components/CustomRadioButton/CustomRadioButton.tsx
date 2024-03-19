import { FormControlLabel, Radio, RadioProps } from '@mui/material';
import { CustomRadioCheckedIcon, CustomRadioIcon } from 'src/styles/ui/radio';

interface ICustomRadioBattonProps extends RadioProps {
  label: string;
}

export const CustomRadioButton = ({
  label,
  ...radioProps
}: ICustomRadioBattonProps) => {
  return (
    <FormControlLabel
      value={radioProps.value}
      control={
        <Radio
          disableRipple
          checkedIcon={<CustomRadioCheckedIcon />}
          icon={<CustomRadioIcon />}
          {...radioProps}
        />
      }
      {...{ label }}
    />
  );
};
