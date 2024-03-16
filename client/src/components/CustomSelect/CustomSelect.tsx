import { FormControl, Select } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { v4 } from 'uuid';

import { ReactComponent as ChevronDown } from 'src/assets/chevron-down.svg';

import { CustomInputBase, CustomInputLabel } from 'src/styles/ui/input';
import { IOption } from 'src/types/ui';

import * as Styled from './CustomSelect.styled';

interface ICustomSelectProps<T extends FieldValues> {
  options: IOption[];
  control: Control<T>;
  name: Path<T>;
  label?: string;
}

export const CustomSelect = <T extends FieldValues>({
  options,
  control,
  name,
  label,
}: ICustomSelectProps<T>) => {
  const [containerPosition, setContainerPosition] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLInputElement>(null);
  const { field } = useController({ control, name });
  const id = v4();

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
    <FormControl fullWidth>
      {label && <CustomInputLabel htmlFor={id}>{label}</CustomInputLabel>}
      <Select
        {...field}
        ref={containerRef}
        id={id}
        autoWidth
        input={<CustomInputBase fullWidth />}
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
