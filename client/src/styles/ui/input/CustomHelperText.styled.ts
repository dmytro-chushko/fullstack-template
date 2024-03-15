import { FormHelperText } from '@mui/material';
import styled from 'styled-components';

export const CustomHelperText = styled(FormHelperText)`
  &.MuiFormHelperText-root {
    &.Mui-error {
      color: ${({ theme }) => theme.color.error.default};
    }
  }
`;
