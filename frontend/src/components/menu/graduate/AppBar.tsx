import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircleRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

import Logo from '../../Logo';
import logoImg from '../../../assets/graduation-hat-and-diploma-white.png';
import CONSTANTS from '../../../commons/Constants';

const MenuGraduateAppBar = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigation = useNavigate();

  const openMenu = Boolean(anchorEl);

  const handleOnClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleOnClickLogOut = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    localStorage.removeItem('userInfoGraduate');
    localStorage.clear();
    handleClose();
    navigation(CONSTANTS.ROUTING.HOME, { replace: true });
  };

  const handleOnClickHome = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    handleClose();
    navigation(CONSTANTS.ROUTING.HOME, { replace: true });
  };

  return (
    <>
      <Box>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexGrow: 1 }}>
          <Toolbar>
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
                mx: 1,
              }}
            >
              Graduando, Biri Chompiras
            </Typography>
            <Tooltip title="Minha Conta" arrow>
              <span>
                <IconButton
                  size="small"
                  aria-label="user account profile"
                  aria-controls="account-profile-appbar"
                  aria-haspopup="false"
                  sx={{ color: '#fff' }}
                  onClick={handleOnClick}
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
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleOnClickHome}>Voltar para Home</MenuItem>
              <MenuItem onClick={handleOnClickLogOut}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MenuGraduateAppBar;
