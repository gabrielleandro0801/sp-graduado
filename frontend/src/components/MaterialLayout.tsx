import React from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './Header';
import MainTheme from '../themes';

const MaterialLayout = (props: React.PropsWithChildren<any>): JSX.Element => {
  const { children } = props;

  return (
    <ThemeProvider theme={MainTheme.lightTheme}>
      <CssBaseline />
      {children}
      <Header />
    </ThemeProvider>
  );
};

export default MaterialLayout;
