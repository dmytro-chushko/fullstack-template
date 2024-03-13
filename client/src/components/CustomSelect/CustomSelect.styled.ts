import { InputBase, InputLabel, MenuItem } from '@mui/material';
import styled from 'styled-components';

export const CustomInput = styled(InputBase)`
  & .MuiInputBase-input {
    line-height: 1.5;
    padding: ${({ theme }) => theme.size.general.s};

    border: 0.0625rem solid ${({ theme }) => theme.color.outline.default};

    &:hover {
      box-shadow: 0 0 0 0.25rem
        ${({ theme }) => theme.color.secondaryContainer.default};
    }

    &:focus {
      box-shadow: 0 0 0 0.25rem
        ${({ theme }) => theme.color.inversePrimary.default};
    }
  }

  &.Mui-focused {
    border-radius: 0.375rem;
    box-shadow: 0 0 0 0.25rem
      ${({ theme }) => theme.color.inversePrimary.default};
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

export const CustomInputLabel = styled(InputLabel)`
  &.MuiInputLabel-root {
    color: ${({ theme }) => theme.color.onBackground.default};
    background-color: ${({ theme }) => theme.color.background.default};
  }
`;

export const DropDownBox = styled.div`
  &.MuiPaper-root {
    padding: ${({ theme }) => theme.size.general.s};

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.color.background.default};
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.color.primary.opacity0_05},
      ${({ theme }) => theme.color.primary.opacity0_05}
    );
  }
`;

export const OptionList = styled.ul`
  &.MuiList-root {
    padding: 0;
  }
`;

export const OptionItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    color: ${({ theme }) => theme.color.onBackground.default};
  }

  &.MuiMenuItem-root.Mui-selected {
    border-radius: 0.325rem;

    background-color: ${({ theme }) => theme.color.primary.opacity0_16};
  }

  &.MuiMenuItem-root:hover,
  &.MuiMenuItem-root.Mui-selected:hover {
    border-radius: 0.325rem;

    background-color: ${({ theme }) => theme.color.surfaceVariant.default};
  }
`;
