import styled from 'styled-components';

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100svh;
  padding: ${({ theme }) => theme.size.general.s};

  & main {
    flex-grow: 1;
  }
`;
