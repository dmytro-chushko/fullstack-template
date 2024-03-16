import styled from 'styled-components';
import { ButtonBase } from '.';

export const OutlinedButton = styled(ButtonBase)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.color.background.default};
    color: ${({ theme }) => theme.color.primary.default};
    box-shadow: none;
    border: 0.0625rem solid ${({ theme }) => theme.color.outline.default};

    &:hover {
      background-color: ${({ theme }) => theme.color.background.default};
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.primary.opacity0_08},
        ${({ theme }) => theme.color.primary.opacity0_08}
      );
    }

    &:focus {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.primary.opacity0_12},
        ${({ theme }) => theme.color.primary.opacity0_12}
      );
      border-color: ${({ theme }) => theme.color.primary.default};
    }

    &:active {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.primary.opacity0_16},
        ${({ theme }) => theme.color.primary.opacity0_16}
      );
      border-color: ${({ theme }) => theme.color.outline.default};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.background.default};
      border-color: ${({ theme }) => theme.color.onBackground.opacity0_12};
      color: ${({ theme }) => theme.color.onBackground.opacity0_38};
    }
  }
`;
