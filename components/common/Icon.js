import styled from 'styled-components';

export const Icon = styled.i`
  color: ${({ color, theme }) => color || theme.colors.secondary};
  font-size: ${({ fontSize }) => fontSize || '22px'};
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
`;
