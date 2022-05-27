import React from 'react';
import Typography from '@mui/material/Typography';
import ToolBar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AccountCircleSharp from '@mui/icons-material/AccountCircleSharp';
import LockSharp from '@mui/icons-material/LockSharp';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';

import Logo from '../components/Logo';
import StyledSwitchTheme from '../components/styles/SwitchTheme';
import CONSTANTS from '../commons/Constants';
import MainTheme from '../themes';
import LoginFormValidation from '../validations/LoginForm';
import logoImg from '../assets/graduation-hat-and-diploma-purple.png';
import ILogin from '../interfaces/ILogin';
import Login from '../components/Login';
import LoginModel from '../models/Login';
import Utils from '../commons/Utils';
import MaterialLayout from '../components/MaterialLayout';

const LoginPage = (): JSX.Element => {
  const [themeEl, setTheme] = React.useState('light-theme');
  const [hasError, setHasError] = React.useState(false);

  const navigate: NavigateFunction = useNavigate();

  const changeTheme = () => (themeEl === CONSTANTS.THEMES.LIGHT ? MainTheme.lightTheme : MainTheme.darkTheme);

  const handleChangeTheme = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newTheme: string = !checked ? CONSTANTS.THEMES.LIGHT : CONSTANTS.THEMES.DARK;
    setTheme(newTheme);
  };

  const handleCloseSnackbar = (): void => {
    setHasError(false);
  };

  const handleOnClickSingUp = (): void => {
    navigate(CONSTANTS.ROUTING.REGISTER.CREATE, { replace: true });
  };

  const handleSubmit = async (fields: ILogin, { resetForm, setSubmitting }: FormikHelpers<ILogin>) => {
    try {
      await Utils.sleep(3000);
      setSubmitting(false);
      resetForm();
      // TODO: Call API to login and pass userInfo into route state
      navigate(CONSTANTS.ROUTING.MENU.GODFATHER, { replace: true, state: { hasOpen: true, userInfo: fields } });
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <MaterialLayout>
      <ThemeProvider theme={changeTheme()}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            elevation={0}
            position="static"
            sx={{ backgroundColor: (theme) => theme.palette.background.default, padding: 2 }}
          >
            <ToolBar>
              <Logo
                width={62}
                height={62}
                textLogo="SP GRADUADO"
                imageUrl={logoImg}
                alt="https://www.freepik.com"
                typographyStyles={{
                  flexGrow: 1,
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontSize: '2.5em',
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
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontWeight: '600',
                  fontSize: '1.2em',
                  letterSpacing: -1,
                  mx: -1,
                }}
              >
                Sing Up
              </Typography>
              <Tooltip title="Sing up" arrow>
                <span>
                  <IconButton
                    size="large"
                    aria-label="user login registration"
                    aria-controls="singup-appbar"
                    aria-haspopup="false"
                    color="primary"
                    onClick={handleOnClickSingUp}
                  >
                    <AccountCircleSharp
                      sx={{
                        width: 42,
                        height: 42,
                      }}
                    />
                  </IconButton>
                </span>
              </Tooltip>
            </ToolBar>
          </AppBar>
          <Container component="main" maxWidth="sm">
            <Paper
              elevation={10}
              sx={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 3,
              }}
            >
              <Avatar sx={{ mt: 5, bgcolor: 'primary.main', width: 72, height: 72 }}>
                <LockSharp />
              </Avatar>
              <Typography
                component="h1"
                sx={{
                  flexGrow: 0,
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontWeight: '500',
                  fontSize: '1.7em',
                }}
              >
                Sing In
              </Typography>
              <Tooltip title="Trocar tema" arrow>
                <span>
                  <StyledSwitchTheme
                    value={themeEl}
                    defaultValue={CONSTANTS.THEMES.LIGHT}
                    onChange={handleChangeTheme}
                  />
                </span>
              </Tooltip>
              <Formik
                initialValues={LoginModel.getInitialValues()}
                validationSchema={LoginFormValidation.getValidationSchema()}
                onSubmit={handleSubmit}
              >
                <Login />
              </Formik>
            </Paper>
          </Container>
          {hasError && (
            <Snackbar open={hasError} autoHideDuration={3000} onClose={handleCloseSnackbar}>
              <Alert
                onClose={handleCloseSnackbar}
                severity="error"
                sx={{ width: '100%', bgcolor: 'primary.main', filter: 'saturate(1.2)' }}
              >
                Não foi possível efetuar o login. Verifique os dados e tente novamente!
              </Alert>
            </Snackbar>
          )}
        </Box>
      </ThemeProvider>
    </MaterialLayout>
  );
};

export default LoginPage;
