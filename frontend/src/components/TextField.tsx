import React from 'react';
import MUITextField from '@mui/material/TextField';
import ITextFieldProps from '../interfaces/props/ITextField';

const TextField = (props: ITextFieldProps): React.ReactElement => {
  const { config, id, label, variantType, disabled, isRequired, hasError, errorMessage, classes } = props;

  return (
    <MUITextField
      id={id}
      label={label}
      variant={variantType}
      disabled={disabled || false}
      required={isRequired || false}
      sx={config}
      error={hasError || false}
      helperText={errorMessage}
      InputProps={{ className: classes }}
    />
  );
};

export default TextField;
