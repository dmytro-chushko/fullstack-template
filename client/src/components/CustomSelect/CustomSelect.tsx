import { FormControl, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';

import { ReactComponent as ChevronDown } from 'src/assets/chevron-down.svg';

import * as Styled from './CustomSelect.styled';

interface IOption {
  value: string;
  label: string;
}

interface ICustomSelectProps {
  options: IOption[];
  defaultValue: string;
  label?: string;
  onSelect?: (value: string) => void;
}

export const CustomSelect = ({
  options,
  defaultValue,
  label,
  onSelect,
}: ICustomSelectProps) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [containerPosition, setContainerPosition] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLInputElement>(null);
  const id = v4();

  const handleChange = (e: SelectChangeEvent<string>) => {
    setValue(e.target.value);
    onSelect && onSelect(e.target.value);
  };

  useEffect(() => {
    setContainerPosition(
      containerRef.current
        ? containerRef.current.getBoundingClientRect().left
        : 0,
    );
    setContainerWidth(
      containerRef.current ? containerRef.current.offsetWidth : 0,
    );
  }, [containerRef]);

  return (
    <FormControl>
      {label && (
        <Styled.CustomInputLabel htmlFor={id}>{label}</Styled.CustomInputLabel>
      )}
      <Select
        ref={containerRef}
        id={id}
        value={value}
        autoWidth
        onChange={handleChange}
        input={<Styled.CustomInput />}
        IconComponent={ChevronDown}
        {...(label ? { label } : {})}
        MenuProps={{
          PaperProps: {
            sx: {
              left: `${containerPosition - 8}px !important`,
              width: `${
                containerWidth ? containerWidth + 16 + 'px' : 'auto'
              } !important`,
            },
            component: Styled.DropDownBox,
          },
          MenuListProps: { component: Styled.OptionList },
        }}
      >
        {options.map(({ value, label }, i) => (
          <Styled.OptionItem key={i} value={value}>
            {label}
          </Styled.OptionItem>
        ))}
      </Select>
    </FormControl>
  );
};
