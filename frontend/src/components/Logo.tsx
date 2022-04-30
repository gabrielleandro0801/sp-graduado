import React from 'react';
import Typography from '@mui/material/Typography';
import logoImg from '../assets/graduation-hat-and-diploma-purple.png';
import ILogo from '../interfaces/props/ILogo';

const Logo = (props: ILogo): JSX.Element => {
  const { height, width, typographyStyles } = props;
  return (
    <>
      <img src={logoImg} alt="https://www.flaticon.com/authors/eucalyp" width={width} height={height} />
      <Typography component="div" sx={typographyStyles}>
        SP GRADUADO
      </Typography>
    </>
  );
};

export default Logo;
