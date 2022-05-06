import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputMask from 'react-input-mask';
import { Form, Formik, FormikProps } from 'formik';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockRounded from '@mui/icons-material/LockRounded';

import StyledTextField from '../styles/TextField';
import Logo from '../Logo';
import graduateLogoImg from '../../assets/graduation-hat-and-diploma-black.png';
import GraduateRegisterFormValidation from '../../validations/GraduateRegisterForm';
import IGraduate from '../../interfaces/IGraduate';
import DateTime from '../../commons/DateTime';
import CONSTANTS from '../../commons/Constants';

const GraduateForm = (): JSX.Element => {
  return (
    <>
      <Container component="main" maxWidth="xl">
        <Logo
          width={62}
          height={62}
          textLogo="FORMANDO"
          imageUrl={graduateLogoImg}
          alt="https://www.flaticon.com/authors/eucalyp"
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

        <Formik
          initialValues={GraduateRegisterFormValidation.getInitialValues()}
          validationSchema={GraduateRegisterFormValidation.getValidationSchema()}
          onSubmit={(fields: IGraduate, { resetForm, setSubmitting }) => {
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
            };
            setSubmitting(false);
            resetForm();
            // TODO: Call API TO register And save context into localStorage
          }}
        >
          {(props: FormikProps<IGraduate>) => (
            <>
              <Form>
                <Grid container direction="column">
                  <Grid item xs={12}>
                    <Paper
                      elevation={6}
                      sx={{
                        marginTop: 25,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 3,
                      }}
                    >
                      <StyledTextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Seu nome"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.name && Boolean(props.errors.name)}
                        helperText={props.touched.name && props.errors.name}
                        value={props.values.name}
                      />
                      <InputMask
                        mask="000.000.000-00"
                        value={props.values.documentNumber}
                        onChange={props.handleChange}
                      >
                        {(inputProps: any) => (
                          <StyledTextField
                            {...inputProps}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="cpf"
                            name="cpf"
                            autoComplete="cpf"
                            autoFocus
                            onBlur={props.handleBlur}
                            error={props.touched.documentNumber && Boolean(props.errors.documentNumber)}
                            helperText={props.touched.documentNumber && props.errors.documentNumber}
                          />
                        )}
                      </InputMask>
                      <InputMask mask="00/00/000" value={props.values.birthDate} onChange={props.handleChange}>
                        {(inputProps: any) => (
                          <StyledTextField
                            {...inputProps}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="birth-date"
                            name="birth-date"
                            autoComplete="birth-date"
                            autoFocus
                            onBlur={props.handleBlur}
                            error={props.touched.birthDate && Boolean(props.errors.birthDate)}
                            helperText={props.touched.birthDate && props.errors.birthDate}
                          />
                        )}
                      </InputMask>
                      <InputMask
                        mask="(99) 99999-9999"
                        value={props.values.contacts?.phoneNumber}
                        onChange={props.handleChange}
                      >
                        {(inputProps: any) => (
                          <StyledTextField
                            {...inputProps}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="phone-number"
                            name="phone-number"
                            autoComplete="phone-number"
                            autoFocus
                            onBlur={props.handleBlur}
                            error={props.touched.contacts?.phoneNumber && Boolean(props.errors.contacts?.phoneNumber)}
                            helperText={props.touched.contacts?.phoneNumber && props.errors.contacts?.phoneNumber}
                          />
                        )}
                      </InputMask>
                      <InputMask mask="99999.00" value={props.values.incomeFamily} onChange={props.handleChange}>
                        {(inputProps: any) => (
                          <StyledTextField
                            {...inputProps}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="income"
                            name="income"
                            autoComplete="income"
                            autoFocus
                            onBlur={props.handleBlur}
                            error={props.touched.incomeFamily && Boolean(props.errors.incomeFamily)}
                            helperText={props.touched.incomeFamily && props.errors.incomeFamily}
                          />
                        )}
                      </InputMask>
                      <StyledTextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="about"
                        label="Conte um sobre você!"
                        name="about"
                        autoComplete="about"
                        autoFocus
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.about && Boolean(props.errors.about)}
                        helperText={props.touched.about && props.errors.about}
                        value={props.values.name}
                      />
                      <StyledTextField
                        variant="outlined"
                        margin="normal"
                        select
                        required
                        fullWidth
                        id="college"
                        label="Selecione uma faculdade"
                        name="college"
                        autoComplete="college"
                        autoFocus
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.course?.college?.name && Boolean(props.errors.course?.college?.name)}
                        helperText={props.touched.course?.college?.name && props.errors.course?.college?.name}
                        value={props.values.course?.college?.name}
                      />
                      {/* // TODO: implement Alert Dialog with list of courses of a selected college} */}
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      elevation={6}
                      sx={{
                        marginTop: 25,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 3,
                      }}
                    >
                      <Avatar sx={{ mt: 5, bgcolor: 'primary.main', width: 72, height: 72 }}>
                        <LockRounded />
                      </Avatar>
                      <Typography
                        component="h1"
                        sx={{
                          flexGrow: 0,
                          color: (theme) => theme.palette.primary.main,
                          fontStyle: 'inherit',
                          fontWeight: '500',
                          fontSize: '1.7em',
                        }}
                      >
                        Login Information
                      </Typography>
                      <StyledTextField
                        variant="outlined"
                        margin="normal"
                        select
                        required
                        fullWidth
                        id="email"
                        label="email@example.com"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.contacts?.email && Boolean(props.errors.contacts?.email)}
                        helperText={props.touched.contacts?.email && props.errors.contacts?.email}
                        value={props.values.contacts?.email}
                      />
                      <StyledTextField
                        variant="outlined"
                        margin="normal"
                        select
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        autoFocus
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.password && Boolean(props.errors.password)}
                        helperText={props.touched.password && props.errors.password}
                        value={props.values.password}
                      />
                      <StyledTextField
                        variant="outlined"
                        margin="normal"
                        select
                        required
                        fullWidth
                        id="confirm-password"
                        label="Confirm Password"
                        name="confirm-password"
                        autoComplete="confirm-password"
                        autoFocus
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.confirmPassword && Boolean(props.errors.confirmPassword)}
                        helperText={props.touched.confirmPassword && props.errors.confirmPassword}
                        value={props.values.confirmPassword}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Form>
            </>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default GraduateForm;
