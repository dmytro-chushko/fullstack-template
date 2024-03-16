import { Button } from '@mui/material';
import styled from 'styled-components';

export const ButtonBase = styled(Button).attrs({ disableRipple: true })`
  &.MuiButton-root {
    padding: ${({ theme }) =>
      `${theme.size.general.s} ${theme.size.general.m}`};

    font-size: ${({ theme }) => theme.size.general.m};
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    text-transform: capitalize;

    border-radius: ${({ theme }) => theme.common.inputBorderRadius};

    &:hover {
      box-shadow: none;
    }

    &:focus {
      box-shadow: ${({ theme }) =>
        `${theme.common.inputBoxShadowSize} ${theme.color.inversePrimary.default}`};
    }

    &:active {
      box-shadow: none;
    }

    &:disabled {
      color: ${({ theme }) => theme.color.onBackground.opacity0_38};
    }
  }
`;
