import React from 'react';
import Typography from '@mui/material/Typography';
import ToolBar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AccountCircleSharp from '@mui/icons-material/AccountCircleSharp';
import LockSharp from '@mui/icons-material/LockSharp';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Tooltip from '@mui/material/Tooltip';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import Logo from '../components/Logo';
import StyledTextField from '../components/styles/TextField';
import StyledSwitchTheme from '../components/styles/SwitchTheme';
import StyledButton from '../components/styles/Button';
import GoogleLoginButton from '../components/GoogleLoginButton';
import CONSTANTS from '../commons/Constants';
import MainTheme from '../themes';

type TextFieldState = {
  value: string;
  hasError: boolean;
  errorMessage: string;
};

const Login = (): JSX.Element => {
  const [themeEl, setTheme] = React.useState('light-theme');

  const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newTheme: string = !checked ? CONSTANTS.THEMES.LIGHT : CONSTANTS.THEMES.DARK;
    setTheme(newTheme);
  };

  const changeTheme = () => (themeEl === CONSTANTS.THEMES.LIGHT ? MainTheme.lightTheme : MainTheme.darkTheme);

  const [email, setEmail]: [TextFieldState, React.Dispatch<React.SetStateAction<TextFieldState>>] = React.useState({
    errorMessage: '',
    hasError: false,
    value: '',
  } as TextFieldState);

  const [password, setPassword]: [TextFieldState, React.Dispatch<React.SetStateAction<TextFieldState>>] =
    React.useState({
      errorMessage: '',
      hasError: false,
      value: '',
    } as TextFieldState);

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const emailValue: string = e.target.value;

    if (!new RegExp(CONSTANTS.REGEX.EMAIL).test(emailValue)) {
      setEmail({
        errorMessage: CONSTANTS.MESSAGES.VALIDATION.EMAIL,
        hasError: true,
        value: email.value,
      });
    } else {
      const emailState: TextFieldState = {
        errorMessage: '',
        hasError: false,
        value: emailValue,
      };
      setEmail(emailState);
    }
  };

  const handleOnChangePassword = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const passwordValue: string = e.target.value;

    if (!new RegExp(CONSTANTS.REGEX.PASSWORD).test(passwordValue)) {
      setEmail({
        errorMessage: CONSTANTS.MESSAGES.VALIDATION.PASSWORD,
        hasError: true,
        value: password.value,
      });
    } else {
      const passwordState: TextFieldState = {
        errorMessage: '',
        hasError: false,
        value: passwordValue,
      };
      setPassword(passwordState);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnClickGoogleLogin = (googleResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    // console.log(googleResponse);
  };

  const handleOnSubmit = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const loginEntryArray: Array<boolean> = [email.hasError, password.hasError];

    if (loginEntryArray.every((value: boolean) => value)) {
      // TODO: send request to login API
    } else {
      <Alert variant="outlined" severity="error" color="error">
        <AlertTitle>Erro</AlertTitle>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          Não foi possível efetuar o login — Verifique seu usuário e senha
        </Typography>
      </Alert>;
    }
  };

  return (
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
              <IconButton
                size="large"
                aria-label="user login registration"
                aria-controls="singup-appbar"
                aria-haspopup="false"
                color="primary"
              >
                <AccountCircleSharp
                  sx={{
                    width: 42,
                    height: 42,
                  }}
                />
              </IconButton>
            </Tooltip>
          </ToolBar>
        </AppBar>
        <Container component="main" maxWidth="sm">
          <Paper
            elevation={6}
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
            <Tooltip title="trocar tema" arrow>
              <StyledSwitchTheme value={themeEl} defaultValue={CONSTANTS.THEMES.LIGHT} onChange={handleChange} />
            </Tooltip>
            <Box component="form" noValidate sx={{ mt: 1, padding: 5 }} onSubmit={handleOnSubmit}>
              <StyledTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleOnChangeEmail}
                error={email.hasError}
                helperText={email.errorMessage}
              />
              <StyledTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleOnChangePassword}
                error={password.hasError}
                helperText={password.errorMessage}
              />
              <Link href="/forgot-password" variant="body2">
                Esqueceu a senha?
              </Link>
              <StyledButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFF',
                    flexGrow: 1,
                    fontStyle: 'inherit',
                    fontWeight: '500',
                  }}
                >
                  Login
                </Typography>
              </StyledButton>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Grid container direction="row" spacing={{ xs: 2 }} alignItems="center" sx={{ m: 5 }}>
                <Grid item xs>
                  <GoogleLoginButton onSuccess={handleOnClickGoogleLogin} onFailure={handleOnClickGoogleLogin} />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
