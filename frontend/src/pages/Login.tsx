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
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Tooltip from '@mui/material/Tooltip';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { NavigateFunction, useNavigate, Link } from 'react-router-dom';
import { Form, Formik, FormikProps } from 'formik';

import Logo from '../components/Logo';
import StyledTextField from '../components/styles/TextField';
import StyledSwitchTheme from '../components/styles/SwitchTheme';
import StyledButton from '../components/styles/Button';
import GoogleLoginButton from '../components/GoogleLoginButton';
import CONSTANTS from '../commons/Constants';
import MainTheme from '../themes';
import Copyright from '../components/Copyright';
import LoginFormValidation from '../validations/LoginForm';
import logoImg from '../assets/graduation-hat-and-diploma-purple.png';
import ILogin from '../interfaces/ILogin';

const Login = (): JSX.Element => {
  const [themeEl, setTheme] = React.useState('light-theme');
  const navigate: NavigateFunction = useNavigate();

  const handleChangeTheme = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newTheme: string = !checked ? CONSTANTS.THEMES.LIGHT : CONSTANTS.THEMES.DARK;
    setTheme(newTheme);
  };

  const changeTheme = () => (themeEl === CONSTANTS.THEMES.LIGHT ? MainTheme.lightTheme : MainTheme.darkTheme);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnClickGoogleLogin = (googleResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    // console.log(googleResponse);
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
              textLogo="SP GRADUADO"
              imageUrl={logoImg}
              alt="https://www.flaticon.com/authors/eucalyp"
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
            <Tooltip title="Trocar tema" arrow>
              <span>
                <StyledSwitchTheme value={themeEl} defaultValue={CONSTANTS.THEMES.LIGHT} onChange={handleChangeTheme} />
              </span>
            </Tooltip>
            <Formik
              initialValues={LoginFormValidation.getInitialValues()}
              validationSchema={LoginFormValidation.getValidationSchema()}
              onSubmit={(fields: ILogin, { resetForm, setSubmitting }) => {
                setSubmitting(false);
                resetForm();
                // TODO: Call API to login and pass userInfo into route state
                // TODO: Implement Google Login
                navigate('/menu/godfather', { replace: true, state: { hasOpen: true, userInfo: fields } });
              }}
            >
              {(props: FormikProps<ILogin>) => (
                <>
                  <Form onSubmit={props.handleSubmit}>
                    <Box sx={{ mt: 1, padding: 5 }}>
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
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.email && Boolean(props.errors.email)}
                        helperText={props.touched.email && props.errors.email}
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
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        error={props.touched.password && Boolean(props.errors.password)}
                        helperText={props.touched.password && props.errors.password}
                      />
                      <Link to="/forgot-password" replace>
                        <Typography
                          variant="h6"
                          sx={{
                            color: (theme) => theme.palette.primary.main,
                            flexGrow: 1,
                            fontStyle: 'inherit',
                            fontWeight: '400',
                            fontSize: '0.9em',
                          }}
                        >
                          Esqueceu a senha?
                        </Typography>
                      </Link>
                      <StyledButton
                        type="submit"
                        disabled={props.isSubmitting}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
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
                  </Form>
                </>
              )}
            </Formik>
            <Box sx={{ mt: 1 }}>
              <Grid container direction="row" spacing={{ xs: 2 }} alignItems="center" sx={{ m: 5 }}>
                <Grid item xs>
                  <GoogleLoginButton onSuccess={handleOnClickGoogleLogin} onFailure={handleOnClickGoogleLogin} />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
        <Grid container direction="column" spacing={{ xs: 1 }} alignItems="center" sx={{ m: 5, position: 'absolute' }}>
          <Grid item xs sx={{ md: 5, mt: 5 }}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
