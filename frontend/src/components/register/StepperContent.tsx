import React from 'react';
import { useFormikContext } from 'formik';

import GraduateForm from './graduate/GraduateForm';
import RegisterType from './RegisterType';
import TermsAndConditions from './TermsAndConditions';
import CONSTANTS from '../../commons/Constants';
import IPerson from '../../interfaces/IPerson';

const StepperContent = ({ currentStep }: { currentStep: number }): JSX.Element => {
  const formik = useFormikContext<IPerson>();
  const termsAndCoditions: string =
    formik.values?.type === 'Padrinho' ? CONSTANTS.TERMS_CONDITIONS.GODFATHER : CONSTANTS.TERMS_CONDITIONS.GRADUATE;

  switch (currentStep) {
    case 0:
      return <RegisterType />;
    case 1:
      return <GraduateForm />;
    // return type === CONSTANTS.REGISTER_TYPE.GRADUATE ? <GraduateForm /> : <GodfatherForm />;
    case 2:
      return <TermsAndConditions terms={String(termsAndCoditions)} />;
    default:
      return <div> An error occured </div>; // TODO: Criar componente de erro
  }
};

export default StepperContent;
