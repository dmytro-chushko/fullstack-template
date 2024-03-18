import styled from 'styled-components';
import { CustomCheckboxIcon } from '.';

export const CustomCheckboxCheckedIcon = styled(CustomCheckboxIcon)`
  background-color: ${({ theme }) => theme.color.primary.default};
  border-color: ${({ theme }) => theme.color.primary.default};
  color: ${({ theme }) => theme.color.onPrimary.default};

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

  .Mui-error > .MuiCheckbox-root > & {
    background-color: ${({ theme }) => theme.color.error.default};
    border-color: ${({ theme }) => theme.color.error.default};
    color: ${({ theme }) => theme.color.onError.default};
  }

  .Mui-error > .MuiCheckbox-root > input:hover ~ & {
    background-color: ${({ theme }) => theme.color.error.default};
    color: ${({ theme }) => theme.color.onError.default};
  }

  .Mui-error > .MuiCheckbox-root > input:focus ~ & {
    background-color: ${({ theme }) => theme.color.error.default};
    color: ${({ theme }) => theme.color.onError.default};
  }

  .Mui-error > .MuiCheckbox-root > input:active ~ & {
    background-color: ${({ theme }) => theme.color.error.default};
    color: ${({ theme }) => theme.color.onError.default};
  }
`;
