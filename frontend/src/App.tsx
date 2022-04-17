import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MainTheme from './themes';
import Button from './components/Button';
import StyledSwitchTheme from './components/styles/SwitchTheme';
import TextField from './components/TextField';
import Constants from './commons/Constants';

const App = (): JSX.Element => {
  const [theme, setTheme] = React.useState('light-theme');

  const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newTheme: string = !checked ? Constants.THEMES.LIGHT : Constants.THEMES.DARK;
    setTheme(newTheme);
  };

  const changeTheme = () => (theme === Constants.THEMES.LIGHT ? MainTheme.lightTheme : MainTheme.darkTheme);

  return (
    <ThemeProvider theme={changeTheme()}>
      <CssBaseline />
      <StyledSwitchTheme value={theme} defaultValue={Constants.THEMES.LIGHT} onChange={handleChange} />
      <Button
        size="medium"
        text="Primary Button"
        variantType="contained"
        color="primary"
        config={{ width: 300, height: 40, marginTop: 5 }}
      />
      <Button
        size="medium"
        text="Primary Button"
        variantType="outlined"
        color="secondary"
        config={{ width: 300, height: 40, marginTop: 5 }}
      />
      <TextField
        id="outlined-text-field"
        label="Outlined"
        variantType="outlined"
        config={{ width: 300, padding: 1, marginTop: 5 }}
      />
    </ThemeProvider>
  );
};

export default App;
