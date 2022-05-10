import React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import Logo from './Logo';

import termsAndConditionsImg from '../assets/contract-purple.png';
import ITermsAndConditionsProps from '../interfaces/props/ITermsAndConditionsProps';

const TermsAndConditions = ({ terms }: ITermsAndConditionsProps): JSX.Element => {
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Logo
          alt="https://www.flaticon.com/authors/andy-horvath"
          width={62}
          height={62}
          imageUrl={termsAndConditionsImg}
          textLogo="Termos e Condições"
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
        <Paper
          elevation={6}
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
          }}
        >
          <Typography
            sx={{
              flexGrow: 1,
              color: 'black',
              fontStyle: 'inherit',
              fontSize: '1.5em',
              fontWeight: 'bold',
              mx: 1,
              my: 1,
              letterSpacing: -1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {terms}
          </Typography>
          <FormControlLabel
            control={<CheckBox />}
            label="Eu li e concordo com os termos declarados acima."
            color="primary.main"
          />
        </Paper>
      </Container>
    </>
  );
};

export default TermsAndConditions;
