import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './index';

export const CustomThemeProvider = (props) => {
  //const { data } = useSession();

  return <ThemeProvider theme={DarkTheme}>{props.children}</ThemeProvider>;
};
