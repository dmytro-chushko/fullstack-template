import styled from 'styled-components';

import checkIcon from 'src/assets/check-icon.svg';
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

    background-image: url(${checkIcon});
    background-position: center;
    background-size: cover;
  }
`;
