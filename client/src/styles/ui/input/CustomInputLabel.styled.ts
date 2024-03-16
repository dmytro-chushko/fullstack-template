import { InputLabel } from '@mui/material';
import styled from 'styled-components';

export const CustomInputLabel = styled(InputLabel)`
  &.MuiInputLabel-root {
    padding-left: ${({ theme }) => theme.size.general.xxs};
    padding-right: ${({ theme }) => theme.size.general.xxs};

    color: ${({ theme }) => theme.color.outline.default};
    background-color: ${({ theme }) => theme.color.background.default};
    border-radius: ${({ theme }) => theme.common.inputBorderRadius};

    transform: translate(
        ${({ theme }) => theme.size.general.s},
        ${({ theme }) => theme.size.general.s}
      )
      scale(1);

    &.Mui-error {
      color: ${({ theme }) => theme.color.error.default};
    }
  }

  &.MuiInputLabel-root.Mui-focused,
  &.MuiFormLabel-filled {
    transform: translate(0.875rem, -0.5625rem) scale(0.75);
  }
`;
