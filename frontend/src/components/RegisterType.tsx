import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import StyledFormControlLabel from './styles/FormControlLabel';
import CONSTANTS from '../commons/Constants';

const RegisterType = (): JSX.Element => {
  const [type, setType] = React.useState();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((CONSTANTS.REGISTER_TYPE as any)[event.target.value]);
  };

  return (
    <>
      <FormControl>
        <FormLabel id="controlled-register-type">Selecione o Tipo do seu Cadastro</FormLabel>
        <RadioGroup
          value={type}
          onChange={handleOnChange}
          aria-labelledby="contolled-register-type"
          name="controlled-radio-button-register-type"
        >
          <StyledFormControlLabel value="GRADUATE" control={<Radio size="medium" />} label="Formando" />
          <StyledFormControlLabel value="GODFATHER" control={<Radio size="medium" />} label="Padrinho" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RegisterType;
