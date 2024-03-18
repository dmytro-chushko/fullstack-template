import CheckIcon from '@mui/icons-material/Check';
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
} from '@mui/material';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  CustomCheckboxCheckedIcon,
  CustomCheckboxIcon,
} from 'src/styles/ui/checkbox';
import { CustomHelperText } from 'src/styles/ui/input';

interface ICustomCheckbox<T extends FieldValues> extends CheckboxProps {
  label?: string;
  control: Control<T>;
  name: Path<T>;
}

export const CustomCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
  ...checkboxProps
}: ICustomCheckbox<T>) => {
  const { t } = useTranslation();
  const {
    field,
    fieldState: { error, invalid },
  } = useController({ control, name });

  const renderCheckbox = () => (
    <Checkbox
      {...field}
      {...checkboxProps}
      disableRipple
      icon={<CustomCheckboxIcon />}
      checkedIcon={<CheckedIconWrapper />}
    />
  );

  return (
    <FormControl error={invalid}>
      {label ? (
        <FormControlLabel {...{ label }} control={renderCheckbox()} />
      ) : (
        renderCheckbox()
      )}
      {error && (
        <CustomHelperText>
          {t(...JSON.parse(error?.message || ''))}
        </CustomHelperText>
      )}
    </FormControl>
  );
};

function CheckedIconWrapper() {
  return (
    <CustomCheckboxCheckedIcon>
      <CheckIcon fontSize="small" />
    </CustomCheckboxCheckedIcon>
  );
}
