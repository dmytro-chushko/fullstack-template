import styled, { css } from 'styled-components';

export const SwitcherLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
`;

export const SwitcherTrigger = styled.div`
  position: absolute;
  top: 50%;
  right: 0.5rem;

  width: 1rem;
  height: 1rem;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.outline.default};

  transform: translate(-100%, -50%);

  transition: ${({ theme }) => theme.common.transition};
`;

interface ISwitcherBox {
  isTurnedOn: boolean;
  disabled: boolean;
}

export const SwitcherBox = styled.div<ISwitcherBox>`
  position: relative;

  width: 3rem;
  height: 2rem;

  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.color.primary.default};

  transition: ${({ theme }) => theme.common.transition};

  ${({ isTurnedOn }) =>
    isTurnedOn
      ? css`
          background-color: ${({ theme }) => theme.color.primary.default};
        `
      : css`
          background-color: ${({ theme }) =>
            theme.color.surfaceVariant.default};
          box-shadow: 0 0 0 0.0625rem
            ${({ theme }) => theme.color.outline.default};
        `}

  @media (hover: hover) {
    &:hover:not([disabled]) {
      ${({ isTurnedOn }) =>
        isTurnedOn
          ? css`
              background-image: linear-gradient(
                to right,
                ${({ theme }) => theme.color.onPrimary.opacity0_12},
                ${({ theme }) => theme.color.onPrimary.opacity0_12}
              );
            `
          : css`
              background-image: linear-gradient(
                to right,
                ${({ theme }) => theme.color.onBackground.opacity0_08},
                ${({ theme }) => theme.color.onBackground.opacity0_08}
              );

              & > ${SwitcherTrigger} {
                background-color: ${({ theme }) =>
                  theme.color.onSurfaceVariant.default};
              }
            `}
    }
  }
`;

export const SwitcherInput = styled.input`
  display: none;

  &:checked + ${SwitcherTrigger} {
    background-color: ${({ theme }) => theme.color.onPrimary.default};

    transform: translateY(-50%);
  }
`;
