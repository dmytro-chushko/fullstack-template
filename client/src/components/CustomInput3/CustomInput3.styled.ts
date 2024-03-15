import { TextField } from '@mui/material';
import styled from 'styled-components';

export const CustomInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.color.onBackground.default};

    & fieldset {
      border: 0.0625rem solid ${({ theme }) => theme.color.outline.default};
    }

    &:hover fieldset {
      box-shadow: 0 0 0 0.25rem
        ${({ theme }) => theme.color.secondaryContainer.default};
      border-color: ${({ theme }) => theme.color.outline.default};
    }
  }

  & .MuiOutlinedInput-input {
    padding: ${({ theme }) => theme.size.general.s};

    line-height: 1.5;
  }

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.color.outline.default};
    background-color: ${({ theme }) => theme.color.background.default};

    transform: translate(
        ${({ theme }) => theme.size.general.s},
        ${({ theme }) => theme.size.general.s}
      )
      scale(1);

    &.Mui-error {
      color: ${({ theme }) => theme.color.error.default};
    }
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.color.primary.default};

    & fieldset legend {
      height: 20px;
    }

    &.Mui-error {
      color: ${({ theme }) => theme.color.error.default};
    }
  }

  & .MuiInputLabel-root.Mui-focused,
  & .MuiFormLabel-filled {
    transform: translate(0.875rem, -0.5625rem) scale(0.75);
  }

  & .Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.color.primary.default};
    box-shadow: 0 0 0 0.25rem
      ${({ theme }) => theme.color.inversePrimary.default};
    border-width: 0.0625rem;
  }

  & .Mui-error {
    & fieldset.MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.color.error.default};
    }

    &:hover fieldset {
      box-shadow: 0 0 0 0.25rem ${({ theme }) => theme.color.error.opacity0_16};
    }

    &.Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
      box-shadow: 0 0 0 0.25rem
        ${({ theme }) => theme.color.errorContainer.default};
    }
  }

  & .MuiFormHelperText-root.Mui-error {
    color: ${({ theme }) => theme.color.error.default};
  }
`;
