import React from 'react';
import Container from '@mui/material/Container';

import Copyright from './Copyright';

const Header = (): JSX.Element => {
  return (
    <>
      <Container sx={{ display: 'flex', flexDirection: 'column', mt: 'calc(5% + 30px)', alignItems: 'center' }}>
        <Copyright />
      </Container>
    </>
  );
};

export default Header;
