import React from 'react';
import MUIButton from '@mui/material/Button';
import IBaseButtonProps from '../interfaces/props/IButton';

const Button = (props: IBaseButtonProps): React.ReactElement => {
  const { text, variantType, disabled, materialHref, size, color, config, classes, onClick } = props;

  return (
    <MUIButton
      variant={variantType}
      disabled={disabled || false}
      size={size}
      href={materialHref}
      color={color}
      sx={config}
      onClick={onClick}
      className={classes}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
