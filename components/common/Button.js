import styled from 'styled-components';

export const Button = styled.a`
  width: ${({ width }) => width || '100%'};
  background-color: ${({ theme, backgroundColor, loading }) =>
    loading
      ? theme.colors.background
      : backgroundColor || theme.colors.primary};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s;
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  margin-top: ${({ marginTop }) => marginTop || 0};
  border: 3px solid
    ${({ theme, backgroundColor }) => backgroundColor || theme.colors.primary};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  border-radius: ${({ loading }) => loading && '50px'};
  :hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme, backgroundColor }) =>
      backgroundColor || theme.colors.primary};
    border: 3px solid
      ${({ theme, backgroundColor }) => backgroundColor || theme.colors.primary};

    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.a`
  width: ${({ width }) => width || '100%'};
  background-color: ${({ theme, backgroundColor, loading }) =>
    loading
      ? theme.colors.background
      : backgroundColor || theme.colors.secondary};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  margin-top: ${({ marginTop }) => marginTop || 0};
  border: 3px solid
    ${({ theme, backgroundColor }) => backgroundColor || theme.colors.primary};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.primary};
  border: 3px solid
    ${({ theme, backgroundColor }) => backgroundColor || theme.colors.primary};
  margin-right: ${({ marginRight }) => marginRight || 0};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
