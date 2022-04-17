import React from 'react';
import Button from '@mui/material/Button';
import ISecondaryButtonProps from '../interfaces/props/IBaseButton';

const SecondaryButton = (props: ISecondaryButtonProps): React.ReactElement => {
  const { text, variantType, disabled, materialHref, size } = props;

  return (
    <Button variant={variantType} disabled={disabled || false} size={size} href={materialHref} color="secondary">
      {text}
    </Button>
  );
};

export default SecondaryButton;
