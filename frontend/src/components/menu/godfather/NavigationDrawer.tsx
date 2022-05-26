import React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import MenuList from './MenuList';
import Header from './Header';
import MenuGodfatherAppBar from './AppBar';
import DrawerContext from '../../contexts/Drawer';

const GodafatherNavigationDrawer = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

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
      <DrawerContext.Provider value={{ openDrawer: open, setOpenDrawer: setOpen }}>
        <Box sx={{ display: 'flex' }}>
          <MenuGodfatherAppBar />
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
              color: (theme) => theme.palette.primary.main,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
            }}
          >
            <Header />
            <Divider sx={{ m: 0 }} />
            <MenuList />
          </Drawer>
        </Box>
      </DrawerContext.Provider>
    </>
  );
};

export default GodafatherNavigationDrawer;
