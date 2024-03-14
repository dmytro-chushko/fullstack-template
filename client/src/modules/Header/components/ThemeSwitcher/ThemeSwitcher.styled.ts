import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  color: ${({ theme }) => theme.color.onBackground.default};
  fill: currentColor;
  stroke: currentColor;

  cursor: pointer;

  transition: ${({ theme }) => theme.common.transition};

  &:hover {
    color: ${({ theme }) => theme.color.primary.default};
  }
`;
