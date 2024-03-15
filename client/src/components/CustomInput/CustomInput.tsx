import { FormControl, InputBaseComponentProps } from '@mui/material';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { v4 } from 'uuid';

import {
  CustomHelperText,
  CustomInputBase,
  CustomInputLabel,
} from 'src/styles/ui/input';

interface ICustomInput2Props<T extends FieldValues>
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
}: ICustomInput2Props<T>) => {
  const id = v4();
  const {
    field,
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <FormControl error={invalid}>
      {label && <CustomInputLabel htmlFor={id}>{label}</CustomInputLabel>}
      <CustomInputBase
        id={id}
        {...(label ? { label } : {})}
        {...field}
        error={invalid}
        inputProps={inputProps}
      />
      <CustomHelperText>{error?.message}</CustomHelperText>
    </FormControl>
  );
};
