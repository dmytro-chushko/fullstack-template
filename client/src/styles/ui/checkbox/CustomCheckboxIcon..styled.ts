import styled from 'styled-components';

export const CustomCheckboxIcon = styled.span`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: ${({ theme }) => theme.common.inputBorderRadius};
  border: 0.125rem solid ${({ theme }) => theme.color.onBackground.default};

  input:hover ~ & {
    background-color: ${({ theme }) => theme.color.primary.opacity0_08};
    box-shadow: 0 0 0 0.25rem
      ${({ theme }) => theme.color.secondaryContainer.default};
  }

  input:focus ~ & {
    background-color: ${({ theme }) => theme.color.primary.opacity0_12};
    box-shadow: 0 0 0 0.25rem
      ${({ theme }) => theme.color.inversePrimary.default};
  }

  input:active ~ & {
    background-color: ${({ theme }) => theme.color.primary.opacity0_16};
    box-shadow: none;
  }

  input:disabled ~ & {
    border-color: ${({ theme }) => theme.color.onBackground.opacity0_38};
  }
`;
