import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MaterialLayout from '../components/MaterialLayout';
import GraduateMenuContent from '../components/menu/graduate/MenuContent';
import MenuGraduateAppBar from '../components/menu/graduate/AppBar';
import CONSTANTS from '../commons/Constants';
import AlertDialog from '../components/AlertDialog';
import SnackBar from '../components/SnackBar';

const GraduatePage = (): JSX.Element => {
  const [hasLoggedIn, setHasLoggedIn] = React.useState(true);
  const { state: locationState }: any = useLocation();
  const navigation = useNavigate();

  const isLoggedIn = (): boolean => {
    return !!locationState?.userInfo;
  };

  const isOnStorage = (): boolean => {
    return !!localStorage.getItem('userInfoGraduate');
  };

  const persistUserInfoOnLocalStorage = (): void => {
    if (locationState?.userInfo && !isOnStorage()) {
      localStorage.setItem('userInfoGraduate', JSON.stringify(locationState?.userInfo));
    }
  };

  const getUserInfoFromStorage = (): any => {
    const dataGraduate = localStorage.getItem('userInfoGraduate');

    if (dataGraduate) return JSON.parse(dataGraduate);

    return {};
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
      <MenuGraduateAppBar />
      <GraduateMenuContent graduateInfo={{ ...getUserInfoFromStorage() }} />
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

export default GraduatePage;
