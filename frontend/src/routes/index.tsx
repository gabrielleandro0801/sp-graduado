import React from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import MainTheme from '../themes';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Godfather from '../pages/Godfather';
import Register from '../pages/Register';
import CONSTANTS from '../commons/Constants';

const Routes = (): JSX.Element => {
  return (
    <ThemeProvider theme={MainTheme.lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Router>
          <Route path={CONSTANTS.ROUTING.HOME} element={<Home />} />
          <Route path={CONSTANTS.ROUTING.LOGIN} element={<Login />} />
          <Route path={CONSTANTS.ROUTING.MENU.GODFATHER} element={<Godfather />} />
          <Route path={CONSTANTS.ROUTING.REGISTER} element={<Register />} />
        </Router>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
