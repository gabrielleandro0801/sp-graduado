import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import { FormikHelpers, Formik, Form, FormikProps } from 'formik';
import { useNavigate } from 'react-router-dom';

import CONSTANTS from '../commons/Constants';
import IGraduate from '../interfaces/IGraduate';
import GraduateRegisterFormValidation from '../validations/GraduateRegisterForm';
import GodfatherRegisterFormValidation from '../validations/GodfatherRegisterForm';
import Logo from '../components/Logo';
import GraduateModel from '../models/Graduate';
import graduateLogoImg from '../assets/graduation-hat-and-diploma-purple.png';
import StyledButton from '../components/styles/Button';
import StepperContent from '../components/register/StepperContent';
import RegisterTypeContext from '../components/contexts/RegisterType';
import IGodfather from '../interfaces/IGodfather';
import GodfatherModel from '../models/Godfather';
import MaterialLayout from '../components/MaterialLayout';
import AlertDialog from '../components/AlertDialog';
import Utils from '../commons/Utils';

const FORM_STEPS = CONSTANTS.REGISTRATION_STEPS;
const DEFAULT_TYPE = 'GRADUATE';
const errorInitialValues = { isError: false, message: '' };

const RegisterPage = (): JSX.Element => {
  const [hasError, setHasError] = React.useState(errorInitialValues);
  const [activeStep, setActiveStep] = React.useState(0);
  const [type, setType] = React.useState('');

  const navigate = useNavigate();

  const IS_LAST_STEP = activeStep === FORM_STEPS.length - 1;
  const VALIDATION_SCHEMAS =
    type === DEFAULT_TYPE
      ? GraduateRegisterFormValidation.getValidationSchema()
      : GodfatherRegisterFormValidation.getValidationSchema();
  const INITIAL_VALUES = type === DEFAULT_TYPE ? GraduateModel.getInitialValues() : GodfatherModel.getInitialValues();
  const CURRENT_VALIDATION_SCHEMA = VALIDATION_SCHEMAS[activeStep];

  const handleOnClickBack = (): void => {
    setActiveStep(activeStep - 1);
  };

  const handleOnCloseAlertDialog = (): void => {
    setHasError(errorInitialValues);
  };

  const submitForm = async (
    fields: IGraduate | IGodfather,
    formikHelpers: FormikHelpers<IGraduate | IGodfather>,
  ): Promise<void> => {
    try {
      await Utils.sleep(3000);
      formikHelpers.setSubmitting(false);
      setActiveStep(activeStep + 1);
      formikHelpers.resetForm();
      navigate(CONSTANTS.ROUTING.REGISTER.SUCCESS, { replace: true, state: { ...fields } });
    } catch (error) {
      // TODO: Fazer De/Para das mensagens retornadas no backend
      setHasError({ isError: true, message: CONSTANTS.MESSAGES.BACKEND.REGISTER.DEFAULT });
    }
  };

  const handleSubmit = (fields: IGraduate | IGodfather, formikHelpers: FormikHelpers<IGraduate | IGodfather>): void => {
    if (IS_LAST_STEP) {
      submitForm(fields, formikHelpers);
    } else {
      setActiveStep(activeStep + 1);
      formikHelpers.setTouched({});
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <MaterialLayout>
      <RegisterTypeContext.Provider value={{ type, setType }}>
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
          <Container component="main" maxWidth="xl" sx={{ padding: 3 }}>
            <Stepper activeStep={activeStep}>
              {FORM_STEPS.map((step: string) => (
                <Step key={step}>
                  <StepLabel>
                    <Typography
                      sx={{
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
              <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={CURRENT_VALIDATION_SCHEMA}
                onSubmit={handleSubmit}
              >
                {(formik: FormikProps<IGraduate | IGodfather>) => (
                  <Form id="graduate-form-registration">
                    <Paper
                      elevation={6}
                      sx={{
                        marginTop: 5,
                        borderRadius: 3,
                        padding: 5,
                      }}
                    >
                      <StepperContent currentStep={activeStep} />
                      <Grid container direction="row" sx={{ justifyContent: 'center' }}>
                        <Grid item sx={{ mx: 2 }} xs={8} sm={4}>
                          <StyledButton
                            fullWidth
                            variant="outlined"
                            disabled={activeStep === 0 || activeStep === 1}
                            onClick={handleOnClickBack}
                            sx={{
                              mt: 3,
                              mb: 2,
                              background: (theme) =>
                                theme.palette.mode === 'dark' ? '#000' : theme.palette.background.paper,
                              height: 42,
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

                        <Grid item sx={{ mx: 2 }} xs={8} sm={4}>
                          <LoadingButton
                            type="submit"
                            fullWidth
                            variant="outlined"
                            loading={formik.isSubmitting}
                            disabled={formik.isSubmitting}
                            sx={{
                              mt: 3,
                              mb: 2,
                              background: (theme) =>
                                theme.palette.mode === 'dark' ? '#000' : theme.palette.background.paper,
                              height: 42,
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
                              {IS_LAST_STEP ? 'Confirmar Registro' : 'Próximo'}
                            </Typography>
                          </LoadingButton>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Form>
                )}
              </Formik>
            </>
          </Container>
          {hasError.isError && (
            <AlertDialog
              buttonText="Ok"
              open={hasError.isError}
              onClose={handleOnCloseAlertDialog}
              textContent={hasError.message}
              titleText="Erro ao Registrar"
            />
          )}
        </Box>
      </RegisterTypeContext.Provider>
    </MaterialLayout>
  );
};

export default RegisterPage;
