import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import Logo from '../../Logo';
import godfatherLogoImg from '../../../assets/ladder-1-black.png';
import CONSTANTS from '../../../commons/Constants';

const MenuGodfatherHeader = (): JSX.Element => {
  return (
    <>
      <Container component="main" sx={{ padding: 3 }}>
        <Logo
          key="graduate-logo"
          imageUrl={godfatherLogoImg}
          width={72}
          height={72}
          textLogo="Padrinho"
          alt=""
          typographyStyles={{
            fontSize: '1.2em',
            fontWeight: 600,
            padding: 1,
            color: (theme) => (theme.palette.mode === 'dark' ? '#FFF' : '#000'),
          }}
        />
        <Link to={CONSTANTS.ROUTING.PROFILE.GODFATHER}>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  flexGrow: 0,
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                email@example.com
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  flexGrow: 0,
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                11953215110
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </Container>
    </>
  );
};

export default MenuGodfatherHeader;
