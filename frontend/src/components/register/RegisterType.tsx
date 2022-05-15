import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { useFormikContext } from 'formik';

import StyledFormControlLabel from '../styles/FormControlLabel';
import CONSTANTS from '../../commons/Constants';
import IGraduate from '../../interfaces/IGraduate';
import SnackBar from '../SnackBar';

const RegisterType = (): JSX.Element => {
  const formik = useFormikContext<IGraduate>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    formik.setFieldValue('type', (CONSTANTS.REGISTER_TYPE as any)[event.target.value]);
  };

  return (
    <>
      <FormControl>
        <FormLabel id="controlled-register-type">Selecione o Tipo do seu Cadastro</FormLabel>
        <RadioGroup
          value={formik.values.termsAndCoditionsAccepted}
          onChange={handleOnChange}
          aria-labelledby="contolled-register-type"
          name="controlled-radio-button-register-type"
        >
          <StyledFormControlLabel value="GRADUATE" control={<Radio size="medium" />} label="Graduando" />
          <StyledFormControlLabel value="GODFATHER" control={<Radio size="medium" />} label="Padrinho" />
        </RadioGroup>
        {formik.touched.type && Boolean(formik.errors.type) && (
          <SnackBar hasOpen={Boolean(formik.errors.type)} severity="error" text={String(formik.errors.type)} />
        )}
      </FormControl>
    </>
  );
};

export default RegisterType;
