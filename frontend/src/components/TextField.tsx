import React from 'react';
import MUITextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import ITextFieldProps from '../interfaces/props/ITextField';

const StyledTextFiled = styled(MUITextField)(({ theme }) => ({
  input: {
    color: theme.palette.mode === 'dark' ? '#FFF' : '#000',
  },
  boxShadow: 'inherit',
}));

const TextField = (props: ITextFieldProps): React.ReactElement => {
  const { config, id, label, variantType, disabled, isRequired, hasError, errorMessage, classes } = props;

  return (
    <StyledTextFiled
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
