import React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useFormikContext } from 'formik';

import graduateLogoImg from '../../assets/graduation-hat-and-diploma-black.png';
import godfatherLogoImg from '../../assets/ladder-1-black.png';
import IPerson from '../../interfaces/IPerson';
import SnackBar from '../SnackBar';
import StyledToggleButton from '../styles/ToggleButton';
import Logo from '../Logo';
import RegisterTypeContext from '../contexts/RegisterType';

const RegisterType = (): JSX.Element => {
  const formik = useFormikContext<IPerson>();
  const [alignment, setAlignment] = React.useState(formik.values.type || '');
  const { setType } = React.useContext(RegisterTypeContext);

  const handleOnChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    formik.handleChange(event);
    setAlignment(newAlignment);
    formik.setFieldValue('type', newAlignment);
    setType(newAlignment);
  };

  return (
    <>
      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Typography
          id="title-typo"
          sx={{
            fontSize: '1.6em',
            fontWeight: 600,
            padding: 1,
            color: (theme) => (theme.palette.mode === 'dark' ? '#FFF' : '#000'),
            fontStyle: 'italic',
          }}
        >
          Como deseja se registrar?
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <ToggleButtonGroup
          id="toggle-button-group"
          orientation="vertical"
          value={alignment}
          exclusive
          onChange={handleOnChange}
          sx={{ m: 4 }}
        >
          <StyledToggleButton id="godfather-toggle-button" value="GODFATHER">
            <Logo
              key="graduate-logo"
              imageUrl={godfatherLogoImg}
              width={72}
              height={72}
              textLogo="Padrinho"
              alt=""
              typographyStyles={{
                fontSize: '1.7em',
                fontWeight: 600,
                padding: 1,
                color: (theme) => (theme.palette.mode === 'dark' ? '#FFF' : '#000'),
              }}
            />
          </StyledToggleButton>
          <StyledToggleButton id="graduate" value="GRADUATE">
            <Logo
              key="graduate-logo"
              imageUrl={graduateLogoImg}
              width={72}
              height={72}
              textLogo="Graduando"
              alt=""
              typographyStyles={{
                fontSize: '1.7em',
                fontWeight: 600,
                padding: 1,
                color: (theme) => (theme.palette.mode === 'dark' ? '#FFF' : '#000'),
              }}
            />
          </StyledToggleButton>
        </ToggleButtonGroup>
      </Box>
      {formik.touched.type && Boolean(formik.errors.type) && (
        <SnackBar hasOpen={Boolean(formik.errors.type)} severity="error" text={String(formik.errors.type)} />
      )}
    </>
  );
};

export default RegisterType;
