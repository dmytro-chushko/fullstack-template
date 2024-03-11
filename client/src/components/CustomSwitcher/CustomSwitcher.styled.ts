import styled from 'styled-components';

export const SwitcherBox = styled.div`
  position: relative;

  width: 3rem;
  height: 2rem;

  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.color.primary.default};

  @media (hover: hover) {
    &:hover:not([disabled]) {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.onPrimary.opacity0_12},
        ${({ theme }) => theme.color.onPrimary.opacity0_12}
      );
    }
  }

  transition: ${({ theme }) => theme.common.transition};
`;

interface ISwitcherTrigger {
  $isTurnedOn: boolean;
}

export const SwitcherTrigger = styled.div<ISwitcherTrigger>`
  position: absolute;
  top: 50%;
  right: 0.5rem;

  width: 1rem;
  height: 1rem;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.onPrimary.default};

  transform: ${({ $isTurnedOn }) =>
    $isTurnedOn ? 'translate(-100%, -50%)' : 'translateY(-50%)'};

  transition: ${({ theme }) => theme.common.transition};
`;
