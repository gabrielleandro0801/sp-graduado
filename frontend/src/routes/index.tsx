import React from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import MainTheme from '../themes';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = (): JSX.Element => {
  return (
    <ThemeProvider theme={MainTheme.lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Router>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
