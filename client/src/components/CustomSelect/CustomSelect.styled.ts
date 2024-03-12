import { InputBase } from '@mui/material';
import styled from 'styled-components';

export const CustomInput = styled(InputBase)`
  padding: ${({ theme }) => theme.size.general.s};

  &.MuiInputBase-root,
  & .MuiSelect-icon {
    color: ${({ theme }) => theme.color.onBackground.default};
  }

  & .MuiSelect-icon {
    top: calc(50% - 0.75rem);

    stroke: currentColor;
  }
`;
