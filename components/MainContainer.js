import React from 'react';
import { Container } from 'react-grid-system';
import styled from 'styled-components';
import GlobalStyle from '../theme/globalStyles';
import { CustomThemeProvider } from '../theme/ThemeProvider';

function MainContainer(props) {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Container>{props.children}</Container>]
    </CustomThemeProvider>
  );
}

export default MainContainer;
