import React from 'react';
import { useField } from 'formik';

import StyledTextField from './TextField';

const FormTextField = ({ ...props }: any): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <StyledTextField
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
    />
  );
};

export default FormTextField;
