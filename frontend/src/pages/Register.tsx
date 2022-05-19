import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { FormikHelpers, Formik, Form } from 'formik';

import DateTime from '../commons/DateTime';
import CONSTANTS from '../commons/Constants';
import IGraduate from '../interfaces/IGraduate';
import GraduateRegisterFormValidation from '../validations/GraduateRegisterForm';
import Logo from '../components/Logo';
import GraduateModel from '../models/Graduate';
import graduateLogoImg from '../assets/graduation-hat-and-diploma-purple.png';
import StyledButton from '../components/styles/Button';
import ConfirmRegistration from '../components/register/ConfirmRegistration';
import StepperContent from '../components/register/StepperContent';

const VALIDATION_SCHEMAS = GraduateRegisterFormValidation.getValidationSchema();
const FORM_STEPS = CONSTANTS.REGISTRATION_STEPS;

const Register = (): JSX.Element => {
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: (theme) => theme.palette.background.default, padding: 2, alignItems: 'center' }}
      >
        <Toolbar>
          <Logo
            width={102}
            height={102}
            textLogo="SP GRADUADO"
            imageUrl={graduateLogoImg}
            alt="https://www.freepik.com"
            typographyStyles={{
              color: (theme) => theme.palette.primary.main,
              fontStyle: 'inherit',
              fontSize: '3em',
              fontWeight: 'bold',
              m: 1,
              letterSpacing: -1,
            }}
          />
        </Toolbar>
        <Typography
          sx={{
            flexGrow: 1,
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'italic',
            fontSize: '2.9em',
            fontWeight: 'bold',
            m: -4,
            padding: 1,
            letterSpacing: -1,
          }}
        >
          Registre-se
        </Typography>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ padding: 3 }}>
        <Stepper activeStep={activeStep}>
          {FORM_STEPS.map((step: string) => (
            <Step
              key={step}
              sx={{
                fontSize: '1em',
              }}
            >
              <StepLabel>
                <Typography
                  sx={{
                    color: (theme) => (theme.palette.mode === 'dark' ? theme.palette.text.primary : 'gray'),
                    fontStyle: 'inherit',
                    fontSize: '1.2em',
                    fontWeight: 500,
                  }}
                >
                  {step}
                </Typography>
              </StepLabel>
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
              <Form id="graduate-form-registration">
                <Paper
                  elevation={6}
                  sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 3,
                    padding: 5,
                  }}
                >
                  <StepperContent currentStep={activeStep} terms="Terms and conditions" />
                  <Grid container direction="row" sx={{ justifyContent: 'center' }}>
                    <Grid item sx={{ mx: 2 }} xs={2}>
                      <StyledButton
                        fullWidth
                        variant="outlined"
                        sx={{
                          mt: 3,
                          mb: 2,
                          background: (theme) =>
                            theme.palette.mode === 'dark' ? '#000' : theme.palette.background.paper,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            flexGrow: 1,
                            fontStyle: 'inherit',
                            fontWeight: '500',
                          }}
                        >
                          Voltar
                        </Typography>
                      </StyledButton>
                    </Grid>
                    <Grid item sx={{ mx: 2 }} xs={2}>
                      <StyledButton
                        fullWidth
                        variant="outlined"
                        sx={{
                          mt: 3,
                          mb: 2,
                          background: (theme) =>
                            theme.palette.mode === 'dark' ? '#000' : theme.palette.background.paper,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            flexGrow: 1,
                            fontStyle: 'inherit',
                            fontWeight: '500',
                          }}
                        >
                          Próximo
                        </Typography>
                      </StyledButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Form>
            </Formik>
          )}
        </>
      </Container>
    </Box>
  );
};

export default Register;
