import React from 'react';
import Button from '@mui/material/Button';
import IBaseButtonProps from '../interfaces/props/IBaseButton';

const PrimaryButton = (props: IBaseButtonProps): React.ReactElement => {
  const { text, variantType, disabled, materialHref, size } = props;

  return (
    <Button variant={variantType} disabled={disabled || false} size={size} href={materialHref} color="primary">
      {text}
    </Button>
  );
};

export default PrimaryButton;
