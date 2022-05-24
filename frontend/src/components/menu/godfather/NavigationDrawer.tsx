import React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import MenuList from './MenuList';
import Header from './Header';

const GodafatherNavigationDrawer = (): JSX.Element => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (openDrawer: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(openDrawer);
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ color: (theme) => theme.palette.primary.main }}
      >
        <Header />
        <Divider sx={{ m: 0 }} />
        <MenuList />
      </Drawer>
    </>
  );
};

export default GodafatherNavigationDrawer;
