import styled from 'styled-components';
import { ButtonBase } from '.';

export const PrimaryButton = styled(ButtonBase).attrs({ variant: 'contained' })`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.color.primary.default};
    color: ${({ theme }) => theme.color.onPrimary.default};
    box-shadow: none;

    &:hover {
      background-color: ${({ theme }) => theme.color.primary.default};
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.onPrimary.opacity0_08},
        ${({ theme }) => theme.color.onPrimary.opacity0_08}
      );
    }

    &:focus {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.onPrimary.opacity0_12},
        ${({ theme }) => theme.color.onPrimary.opacity0_12}
      );
    }

    &:active {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.onPrimary.opacity0_16},
        ${({ theme }) => theme.color.onPrimary.opacity0_16}
      );
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.onBackground.opacity0_12};
    }
  }
`;
