import styled, { css } from 'styled-components';

import checkIconDark from 'src/assets/check-icon-dark.svg';
import checkIconLight from 'src/assets/check-icon-light.svg';
import { CustomCheckboxIcon } from '.';

export const CustomCheckboxCheckedIcon = styled(CustomCheckboxIcon)`
  background-color: ${({ theme }) => theme.color.primary.default};
  border-color: ${({ theme }) => theme.color.primary.default};

  input:hover ~ & {
    background-color: ${({ theme }) => theme.color.primary.default};
  }

  input:focus ~ & {
    background-color: ${({ theme }) => theme.color.primary.default};
  }

  input:active ~ & {
    background-color: ${({ theme }) => theme.color.primary.default};
  }

  input:disabled ~ & {
    background-color: ${({ theme }) => theme.color.onBackground.opacity0_38};
    border-color: ${({ theme }) => theme.color.onBackground.opacity0_38};
  }

  &::before {
    content: '';
    display: block;
    width: 1.375rem;
    height: 1.375rem;

    ${({ theme }) =>
      theme.color.isDark
        ? css`
            background-image: url(${checkIconDark});
          `
        : css`
            background-image: url(${checkIconLight});
          `}
    background-position: center;
    background-size: cover;
  }

  .Mui-error > .MuiCheckbox-root > & {
    background-color: ${({ theme }) => theme.color.error.default};
    border-color: ${({ theme }) => theme.color.error.default};
  }

  .Mui-error > .MuiCheckbox-root > input:hover ~ & {
    background-color: ${({ theme }) => theme.color.error.default};
  }

  .Mui-error > .MuiCheckbox-root > input:focus ~ & {
    background-color: ${({ theme }) => theme.color.error.default};
  }

  .Mui-error > .MuiCheckbox-root > input:active ~ & {
    background-color: ${({ theme }) => theme.color.error.default};
  }
`;
