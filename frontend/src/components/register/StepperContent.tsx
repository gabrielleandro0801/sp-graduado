import React from 'react';
import { useFormikContext } from 'formik';
import { useLocation } from 'react-router-dom';

import GraduateForm from './graduate/GraduateForm';
import GodfatherForm from './godfather/GodfatherForm';
import RegisterType from './RegisterType';
import TermsAndConditions from './TermsAndConditions';
import CONSTANTS from '../../commons/Constants';
import IPerson from '../../interfaces/IPerson';

const StepperContent = ({ currentStep }: { currentStep: number }): JSX.Element => {
  const location = useLocation();
  const formik = useFormikContext<IPerson>();
  const routingState: any = location?.state;

  if (routingState) {
    formik.setFieldValue('contacts.email', routingState.email);
    formik.setFieldValue('password', routingState.password);
    formik.setFieldValue('confirmPassword', routingState.confirmPassword);
  }

  const termsAndCoditions: string =
    formik.values?.type === 'Padrinho' ? CONSTANTS.TERMS_CONDITIONS.GODFATHER : CONSTANTS.TERMS_CONDITIONS.GRADUATE;

  switch (currentStep) {
    case 0:
      return <RegisterType />;
    case 1:
      return formik.values?.type === CONSTANTS.REGISTER_TYPE.GRADUATE ? <GraduateForm /> : <GodfatherForm />;
    case 2:
      return <TermsAndConditions terms={String(termsAndCoditions)} />;
    default:
      return <div> An error occured </div>; // TODO: Criar componente de erro
  }
};

export default StepperContent;
