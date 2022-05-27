import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import Godfather from '../pages/Godfather';
import SuccessPage from '../pages/Success';
import RegisterPage from '../pages/Register';
import ContactsPage from '../pages/Contacts';
import CONSTANTS from '../commons/Constants';
import MainTheme from '../themes';

const Routes = (): JSX.Element => {
  return (
    <ThemeProvider theme={MainTheme.lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Router>
          <Route path={CONSTANTS.ROUTING.HOME} element={<Home />} />
          <Route path={CONSTANTS.ROUTING.LOGIN} element={<LoginPage />} />
          <Route path={CONSTANTS.ROUTING.MENU.GODFATHER} element={<Godfather />} />
          <Route path={CONSTANTS.ROUTING.REGISTER.CREATE} element={<RegisterPage />} />
          <Route path={CONSTANTS.ROUTING.REGISTER.SUCCESS} element={<SuccessPage />} />
          <Route path={CONSTANTS.ROUTING.CONTACT} element={<ContactsPage />} />
        </Router>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
