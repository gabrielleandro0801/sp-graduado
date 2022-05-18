import React from 'react';
import MUIFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { useRadioGroup } from '@mui/material/RadioGroup';
import IStyledFormControlLabelProps from '../../interfaces/props/IStyledFormControlLabelProps';

const FormControlLabel = styled((props: IStyledFormControlLabelProps) => <MUIFormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);

const StyledFormControlLabel = (props: FormControlLabelProps): JSX.Element => {
  const { value } = props;
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === value;
  }

  return <FormControlLabel checked={checked} {...props} />;
};

export default StyledFormControlLabel;
