import { InputBase } from '@mui/material';
import styled from 'styled-components';

export const CustomInputBase = styled(InputBase)`
  & .MuiInputBase-input {
    line-height: 1.5;
    padding: ${({ theme }) => theme.size.general.s};

    border: 0.0625rem solid ${({ theme }) => theme.color.outline.default};
    border-radius: 0.375rem;
  }

  &:hover {
    border-radius: 0.375rem;
    box-shadow: 0 0 0 0.25rem
      ${({ theme }) => theme.color.secondaryContainer.default};
  }

  &.Mui-focused {
    border-radius: 0.375rem;
    box-shadow: 0 0 0 0.25rem
      ${({ theme }) => theme.color.inversePrimary.default};
  }

  &.Mui-error .MuiInputBase-input {
    border-color: ${({ theme }) => theme.color.error.default};

    &:hover {
      box-shadow: 0 0 0 0.25rem ${({ theme }) => theme.color.error.opacity0_16};
    }

    &:focus {
      box-shadow: 0 0 0 0.25rem
        ${({ theme }) => theme.color.errorContainer.default};
    }
  }

  &.MuiInputBase-root,
  & .MuiSelect-icon {
    color: ${({ theme }) => theme.color.onBackground.default};
  }

  & .MuiSelect-icon {
    top: calc(50% - 0.75rem);

    stroke: currentColor;
  }
`;
