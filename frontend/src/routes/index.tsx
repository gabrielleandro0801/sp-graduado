import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import Godfather from '../pages/Godfather';
import RegisterPage from '../pages/Register';
import CONSTANTS from '../commons/Constants';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Router>
        <Route path={CONSTANTS.ROUTING.HOME} element={<Home />} />
        <Route path={CONSTANTS.ROUTING.LOGIN} element={<LoginPage />} />
        <Route path={CONSTANTS.ROUTING.MENU.GODFATHER} element={<Godfather />} />
        <Route path={CONSTANTS.ROUTING.REGISTER} element={<RegisterPage />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
