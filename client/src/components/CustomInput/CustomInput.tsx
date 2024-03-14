import { InputProps } from '@mui/material';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import * as Styled from './CustomInput.styled';

interface ICustomInputProps<T extends FieldValues> extends InputProps {
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
  const {
    field,
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <Styled.CustomInput
      {...(label ? { label } : {})}
      {...field}
      error={invalid}
      helperText={error?.message}
      InputProps={inputProps}
    />
  );
};
