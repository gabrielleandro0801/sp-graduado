import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Copyright = (): JSX.Element => {
  return (
    <>
      <Link to="/copyright" replace>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            flexGrow: 0,
            fontSize: '0.8rem',
            textDecoration: 'underline',
          }}
        >
          Copyright ©2022 SP Graduado | Todos os direitos reservados | Politica de Privacidade | Contate-nos
        </Typography>
      </Link>
    </>
  );
};

export default Copyright;
