import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import ILogo from '../interfaces/props/ILogo';

const Logo = (props: ILogo): JSX.Element => {
  const { height, width, typographyStyles, alt, imageUrl, textLogo } = props;
  return (
    <>
      <Avatar src={imageUrl} alt={alt} variant="square" sx={{ width, height }} />
      <Typography component="div" sx={typographyStyles}>
        {textLogo}
      </Typography>
    </>
  );
};

export default Logo;
