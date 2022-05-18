import React from 'react';
import { useFormikContext } from 'formik';

import IGraduate from '../../interfaces/IGraduate';

const ConfirmRegistration = (): JSX.Element => {
  const formik = useFormikContext<IGraduate>();
  return <></>;
};

export default ConfirmRegistration;
