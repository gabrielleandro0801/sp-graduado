import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircleSharp';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const ICON = {
  DEFAULT_SIZE: {
    width: 32,
    height: 32,
  },
};

const MenuList = (): JSX.Element => {
  return (
    <>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: 'primary.main', ...ICON.DEFAULT_SIZE }}>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Acessar Perfil" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: (theme) => theme.palette.primary.main, ...ICON.DEFAULT_SIZE }}>
                <Avatar sx={{ bgcolor: 'primary.main', ...ICON.DEFAULT_SIZE }}>
                  <HomeIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Voltar Para Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: (theme) => theme.palette.primary.main, ...ICON.DEFAULT_SIZE }}>
                <Avatar sx={{ bgcolor: 'primary.main', ...ICON.DEFAULT_SIZE }}>
                  <LogoutIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default MenuList;
