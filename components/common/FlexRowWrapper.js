import styled from 'styled-components';

export const FlexRowWrapper = styled.div`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  align-items: center;
  width: ${({ width }) => width || '100%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
  padding: ${({ padding }) => padding || 0};
`;
