import React from 'react';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';

import SnackBar from '../components/SnackBar';
import GodafatherNavigationDrawer from '../components/menu/godfather/NavigationDrawer';
import AlertDialog from '../components/AlertDialog';
import CONSTANTS from '../commons/Constants';
import MaterialLayout from '../components/MaterialLayout';

const Godfather = (): JSX.Element => {
  const [hasLoggedIn, setHasLoggedIn] = React.useState(true);
  const { state: locationState }: any = useLocation();
  const navigation = useNavigate();

  const isLoggedIn = (): boolean => {
    return !!locationState?.userInfo;
  };

  const isOnStorage = (): boolean => {
    return !!localStorage.getItem('userInfo');
  };

  const persistUserInfoOnLocalStorage = (): void => {
    if (locationState?.userInfo && !isOnStorage()) {
      localStorage.setItem('userInfo', JSON.stringify(locationState?.userInfo));
    }
  };

  React.useEffect(() => {
    if (!isLoggedIn() && !isOnStorage()) {
      setHasLoggedIn(false);
    } else {
      persistUserInfoOnLocalStorage();
    }
  }, []);

  const handleOnCloseAlertDialog = (): void => {
    localStorage.clear();
    navigation(CONSTANTS.ROUTING.HOME, { replace: true });
    setHasLoggedIn(true);
  };

  return (
    <MaterialLayout>
      {locationState?.hasOpen && (
        <SnackBar hasOpen={Boolean(locationState?.hasOpen)} severity="info" text="Login efetuado com sucesso!" />
      )}
      <Typography variant="h2" color="primary">
        Godfather
      </Typography>
      <GodafatherNavigationDrawer />
      {!hasLoggedIn && (
        <AlertDialog
          buttonText="Fechar"
          open
          onClose={handleOnCloseAlertDialog}
          textContent="Você não está logado para acessar esta página!"
          titleText="Erro ao Acessar"
        />
      )}
    </MaterialLayout>
  );
};

export default Godfather;
