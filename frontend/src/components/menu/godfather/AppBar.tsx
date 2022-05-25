import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircleTwoTone';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../Logo';
import logoImg from '../../../assets/graduation-hat-and-diploma-white.png';

const MenuGodfatherAppBar = (): JSX.Element => {
  return (
    <>
      <Box>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexGrow: 1 }}>
          <Toolbar>
            <IconButton
              size="large"
              aria-label="user account profile"
              aria-controls="account-profile-appbar"
              aria-haspopup="false"
              sx={{ color: '#fff', mr: 5 }}
              onClick={() => {}}
            >
              <MenuIcon
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
            </IconButton>
            <Logo
              width={52}
              height={52}
              textLogo="SP GRADUADO"
              imageUrl={logoImg}
              alt="https://www.freepik.com"
              typographyStyles={{
                flexGrow: 1,
                color: '#FFF',
                fontStyle: 'inherit',
                fontSize: '1.3em',
                fontWeight: 'bold',
                mx: 1,
                my: 1,
                letterSpacing: -1,
              }}
            />
            <Typography
              component="div"
              sx={{
                flexGrow: 0,
                color: '#FFF',
                fontStyle: 'inherit',
                fontWeight: 400,
                fontSize: '1.2em',
                letterSpacing: -1,
                mx: -1,
              }}
            >
              Padrinho, Biri Chompiras
            </Typography>
            <Tooltip title="Minha Conta" arrow>
              <span>
                <IconButton
                  size="large"
                  aria-label="user account profile"
                  aria-controls="account-profile-appbar"
                  aria-haspopup="false"
                  sx={{ color: '#fff' }}
                  onClick={() => {}}
                >
                  <AccountCircle
                    sx={{
                      width: 42,
                      height: 42,
                    }}
                  />
                </IconButton>
              </span>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MenuGodfatherAppBar;
