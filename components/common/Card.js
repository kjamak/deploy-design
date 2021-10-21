import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.card};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-top: ${({ marginTop }) => marginTop || 0};
  height: 100% !important;
  border: 1px solid ${({ theme }) => theme.colors.card};

  :hover {
    cursor: pointer;
    box-shadow: 0px 4px 16px 0px ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  border-radius: 8px;
`;
