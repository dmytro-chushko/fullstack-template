import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

import { ReactComponent as ChevronDown } from 'src/assets/chevron-down.svg';

import * as Styled from './CustomSelect.styled';

interface IOption {
  value: string;
  label: string;
}

interface ICustomSelectProps {
  options: IOption[];
  defaultValue: IOption;
  label?: string;
}

export const CustomSelect = ({
  options,
  defaultValue,
  label,
}: ICustomSelectProps) => {
  const [value, setValue] = useState<string>(defaultValue.value);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setValue(e.target.value);
  };

  return (
    <FormControl>
      <Select
        value={value}
        onChange={handleChange}
        input={<Styled.CustomInput />}
        IconComponent={ChevronDown}
        {...(label ? { label } : {})}
      >
        {options.map(({ value, label }, i) => (
          <MenuItem key={i} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
