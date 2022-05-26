import React from 'react';

import IDrawerContext from '../../interfaces/IDrawerContext';

const drawerContextInitialValues: IDrawerContext = {
  openDrawer: false,
  setOpenDrawer: (): void => {},
};

const DrawerContext: React.Context<IDrawerContext> = React.createContext(drawerContextInitialValues as IDrawerContext);

export default DrawerContext;
