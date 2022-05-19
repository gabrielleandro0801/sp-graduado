import React from 'react';
import { useFormikContext } from 'formik';

import IGraduate from '../../interfaces/IGraduate';
import GraduateForm from './graduate/GraduateForm';
import RegisterType from './RegisterType';
import TermsAndConditions from './TermsAndConditions';

const StepperContent = ({ currentStep, terms }: any): JSX.Element => {
  const formik = useFormikContext<IGraduate>();
  switch (currentStep) {
    case 0:
      return <GraduateForm />;
    case 1:
      return <RegisterType />;
    // return type === CONSTANTS.REGISTER_TYPE.GRADUATE ? <GraduateForm /> : <GodfatherForm />;
    case 2:
      return <TermsAndConditions terms={String(terms)} />;
    default:
      return <div> An error occured </div>; // TODO: Criar componente de erro
  }
};

export default StepperContent;
