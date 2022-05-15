import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { FormikHelpers, Formik, Form, FormikProps } from 'formik';

import DateTime from '../commons/DateTime';
import CONSTANTS from '../commons/Constants';
import IGraduate from '../interfaces/IGraduate';
import GraduateRegisterFormValidation from '../validations/GraduateRegisterForm';
import RegisterType from '../components/register/RegisterType';
import GraduateForm from '../components/register/graduate/GraduateForm';
import TermsAndConditions from '../components/register/TermsAndConditions';
import ITermsAndConditionsProps from '../interfaces/props/ITermsAndConditionsProps';
import Logo from '../components/Logo';
import GraduateModel from '../models/Graduate';
import graduateLogoImg from '../assets/graduation-hat-and-diploma-purple.png';
import StyledButton from '../components/styles/Button';
import ConfirmRegistration from '../components/register/ConfirmRegistration';

const VALIDATION_SCHEMAS = GraduateRegisterFormValidation.getValidationSchema();
const FORM_STEPS = CONSTANTS.REGISTRATION_STEPS;

const renderStepContent = (currentStep: number, props?: ITermsAndConditionsProps): JSX.Element => {
  switch (currentStep) {
    case 0:
      return <RegisterType />;
    case 1:
      return <GraduateForm />;
    case 3:
      return <TermsAndConditions terms={String(props?.terms)} />;
    default:
      return <div> An error occured </div>; // TODO: Criar componente de erro
  }
};

const Graduate = (): JSX.Element => {
  const [activeStep, setActiveStep] = React.useState(0);

  const IS_LAST_STEP = activeStep === FORM_STEPS.length - 1;
  const CURRENT_VALIDATION_SCHEMA = VALIDATION_SCHEMAS[activeStep];

  const handleOnClickBack = (): void => {
    setActiveStep(activeStep - 1);
  };

  const submitForm = (fields: IGraduate, formikHelpers: FormikHelpers<IGraduate>): void => {
    const rawFields: IGraduate = {
      name: fields.name,
      birthDate: DateTime.toFormat(fields.birthDate, CONSTANTS.DATE.BRAZILIAN, CONSTANTS.DATE.US),
      documentNumber: fields.documentNumber.replace(/[.-]/g, ''),
      incomeFamily: fields.incomeFamily,
      about: fields.about,
      course: fields.course,
      password: fields.password,
      confirmPassword: fields.confirmPassword,
      contacts: {
        email: fields.contacts.email,
        phoneNumber: fields.contacts.phoneNumber.replace(/[-() ]/g, ''),
      },
      college: fields.college,
      termsAndCoditionsAccepted: fields.termsAndCoditionsAccepted,
      type: fields.type,
    };

    formikHelpers.setSubmitting(false);
    setActiveStep(activeStep + 1);
    formikHelpers.resetForm();
    // TODO: Call API TO register
  };

  const handleSubmit = (fields: IGraduate, formikHelpers: FormikHelpers<IGraduate>): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    if (IS_LAST_STEP) {
      submitForm(fields, formikHelpers);
    } else {
      setActiveStep(activeStep + 1);
      formikHelpers.setTouched({});
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <>
      <Logo
        width={72}
        height={72}
        textLogo="SP GRADUADO"
        imageUrl={graduateLogoImg}
        alt="https://www.freepik.com"
        typographyStyles={{
          flexGrow: 1,
          color: (theme) => theme.palette.primary.main,
          fontStyle: 'inherit',
          fontSize: '2.5em',
          fontWeight: 'bold',
          mx: 1,
          my: 1,
          letterSpacing: -1,
        }}
      />
      <Typography
        sx={{
          flexGrow: 1,
          color: (theme) => theme.palette.primary.main,
          fontStyle: 'inherit',
          fontSize: '2.5em',
          fontWeight: 'bold',
          mx: 1,
          my: 1,
          mt: 3,
          letterSpacing: -1,
          filter: 'drop-shadow(4px 4px 10px #000)',
        }}
      >
        Registre-se
      </Typography>
      <Stepper activeStep={activeStep}>
        {FORM_STEPS.map((step: string) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === FORM_STEPS.length ? (
          <ConfirmRegistration />
        ) : (
          <Formik
            initialValues={GraduateModel.getInitialValues()}
            validationSchema={CURRENT_VALIDATION_SCHEMA}
            onSubmit={handleSubmit}
          >
            {(props: FormikProps<IGraduate>) => (
              <Form id="graduate-form-registration">
                {renderStepContent(activeStep)}
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container xs={4} direction="row">
                    {activeStep !== 0 && (
                      <Grid item xs={4}>
                        <StyledButton onClick={handleOnClickBack}>Voltar</StyledButton>
                      </Grid>
                    )}
                    <Grid item xs={8}>
                      <StyledButton type="submit" disabled={props.isSubmitting} size="medium">
                        {IS_LAST_STEP ? 'Confirmar Cadastro' : 'Prosseguir'}
                      </StyledButton>
                    </Grid>
                    {props.isSubmitting && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-12px',
                          marginLeft: '-12px',
                        }}
                      />
                    )}
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        )}
      </>
    </>
  );
};

export default Graduate;
