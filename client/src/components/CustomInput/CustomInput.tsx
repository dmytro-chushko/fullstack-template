import { FormControl, InputBaseComponentProps } from '@mui/material';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { v4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import {
  CustomHelperText,
  CustomInputBase,
  CustomInputLabel,
} from 'src/styles/ui/input';

interface ICustomInputProps<T extends FieldValues>
  extends InputBaseComponentProps {
  control: Control<T>;
  name: Path<T>;
  label?: string;
}

export const CustomInput = <T extends FieldValues>({
  control,
  name,
  label,
  ...inputProps
}: ICustomInputProps<T>) => {
  const id = v4();
  const { t } = useTranslation();
  const {
    field,
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <FormControl fullWidth error={invalid}>
      {label && <CustomInputLabel htmlFor={id}>{label}</CustomInputLabel>}
      <CustomInputBase
        id={id}
        fullWidth
        {...(label ? { label } : {})}
        {...field}
        error={invalid}
        inputProps={inputProps}
      />
      {error && (
        <CustomHelperText>
          {t(JSON.parse(error?.message || ''))}
        </CustomHelperText>
      )}
    </FormControl>
  );
};
