import styled from 'styled-components';

const sizes = ['2.369rem', '1.777rem', '1.333rem', '1rem', '0.750rem', '10px'];

export const Heading = styled.div.attrs(({ level }) => ({
  role: 'heading',
  'aria-level': level || 1,
}))`
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  margin-right: ${(props) => props.marginRight};
  color: ${({ theme, color }) => color || theme.colors.secondary};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-weight: bold;
  overflow-wrap: break-word;
  font-size: ${({ level }) => sizes[level - 1]};
  font-family: 'Roboto', sans-serif;
`;

export const Text = styled.p`
  width: ${({ width }) => width || '100%'};
  color: ${({ theme, color }) => color || theme.colors.secondary};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-weight: ${({ textWeight }) => textWeight || 'inherit'};
  font-size: ${(props) => props.fontSize || '1em'};
  font-family: 'Roboto', sans-serif;
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  margin-left: ${(props) => props.marginLeft || '0px'};

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;
