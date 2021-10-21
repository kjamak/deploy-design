import React from 'react';
import { Container } from 'react-grid-system';
import styled from 'styled-components';
import GlobalStyle from '../theme/globalStyles';
import { CustomThemeProvider } from '../theme/ThemeProvider';

function MainContainer(props) {
  return (
    <CustomThemeProvider>
      <BackgroundColor>
        <GlobalStyle />
        <Container>{props.children}</Container>
      </BackgroundColor>
    </CustomThemeProvider>
  );
}

export default MainContainer;

export const BackgroundColor = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;
