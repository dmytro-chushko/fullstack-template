import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.general.s};

  padding-top: ${({ theme }) => theme.size.general.s};
  padding-bottom: ${({ theme }) => theme.size.general.s};
`;
