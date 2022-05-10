import React from 'react';

import IGraduate from '../../interfaces/IGraduate';
import ICourseContext from '../../interfaces/ICourseContext';
import GraduateRegisterFormValidation from '../../validations/GraduateRegisterForm';

const initialValues: IGraduate = GraduateRegisterFormValidation.getInitialValues();
const courseContextInitialValues: ICourseContext = {
  course: initialValues.course,
  collgeId: 0,
  setCourse: (): void => {},
  setOpenDialog: (): void => {},
};

const CourseContext: React.Context<ICourseContext> = React.createContext(courseContextInitialValues as ICourseContext);

export default CourseContext;
