import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.general.s};

  padding: ${({ theme }) => theme.size.general.s};
`;
