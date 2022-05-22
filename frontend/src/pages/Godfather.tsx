import React from 'react';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import SnackBar from '../components/SnackBar';

const Godfather = (): JSX.Element => {
  const location = useLocation();
  const locationState: any = location.state;

  return (
    <>
      {locationState.hasOpen && (
        <SnackBar hasOpen={Boolean(locationState?.hasOpen)} severity="info" text="Login efetuado com sucesso!" />
      )}
      <Typography variant="h2" color="primary">
        Godfather
      </Typography>
    </>
  );
};

export default Godfather;
