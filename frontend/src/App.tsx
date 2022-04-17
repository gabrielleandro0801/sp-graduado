import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MainTheme from './themes';
import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';
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
      <PrimaryButton size="medium" text="Primary Button" variantType="contained" />
      <SecondaryButton size="medium" text="Primary Button" variantType="contained" />
      <TextField
        id="outlined-text-field"
        label="Outlined"
        variantType="outlined"
        config={{ input: { color: '#000' } }}
      />
    </ThemeProvider>
  );
};

export default App;
