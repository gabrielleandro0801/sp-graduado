import React from 'react';
import Grid from '@mui/material/Grid';
import { useFormikContext } from 'formik';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockRounded from '@mui/icons-material/LockRounded';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import Paper from '@mui/material/Paper';

import FormTextField from '../../styles/FormTextField';
import IGraduate from '../../../interfaces/IGraduate';
import CONSTANTS from '../../../commons/Constants';
import ICollege from '../../../interfaces/ICollege';
import GraduateCoursesDialog from '../../GraduateCoursesDialog';
import SnackBar from '../../SnackBar';
import CourseDialogContext from '../../contexts/CourseDialog';

const MOCKED_COLLEGES: ICollege[] = [
  {
    id: 2,
    name: 'Universidade Nove de Julho (UNINOVE)',
    city: 'São Paulo',
  },
  {
    id: 3,
    name: 'Universidade São Francisco (USF)',
    city: 'Campinas',
  },
];

const GraduateForm = (): JSX.Element => {
  const [colleges, setColleges] = React.useState([] as Array<ICollege>);
  const [openDialog, setOpenDialog] = React.useState(false);

  const formik = useFormikContext<IGraduate>();

  const loadColleges = (): void => {
    const mockedColleges = MOCKED_COLLEGES;
    setColleges(mockedColleges);
  };

  React.useEffect(() => {
    loadColleges();
  }, []);

  const handleCollegesOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [currentCollege]: ICollege[] = colleges.filter(
      (currCollege: ICollege) => currCollege.name === event.target.value,
    );

    formik.handleChange(event);
    formik.setFieldValue('college', currentCollege);
    setOpenDialog(true);
  };

  const handleBirthDateOnChange = (date: string | null): void => {
    formik.setFieldValue('birthDate', date?.toString());
  };

  return (
    <>
      <CourseDialogContext.Provider value={{ openDialog, setOpenDialog }}>
        <Box sx={{ justifyContent: 'center', display: 'flex' }}>
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.main,
              fontStyle: 'inherit',
              fontSize: '2.7em',
              fontWeight: 600,
              mx: 1,
              my: 1,
              letterSpacing: -1,
              filter: 'drop-shadow(5px 1px 5px gray)',
            }}
          >
            Bem vindo, Graduando!
          </Typography>
        </Box>
        <Grid container direction="row" spacing={6}>
          <Grid item xs>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Seu nome"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="cpf"
                  name="cpf"
                  autoComplete="cpf"
                  label="000.000.000-00"
                  placeholder="000.000.000-00"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <LocalizationProvider dateAdapter={AdapterLuxon}>
                  <DesktopDatePicker
                    label="Data de Nascimento"
                    inputFormat={CONSTANTS.DATE.BRAZILIAN}
                    value={formik.values.birthDate}
                    onChange={(event) => handleBirthDateOnChange(event)}
                    renderInput={(params) => (
                      <FormTextField
                        {...params}
                        id="birth-date-date-picker"
                        key="birth-date-date-picker"
                        name="birth-date-date-picker"
                        onBlur={formik.handleBlur}
                        error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                        helperText={formik.errors.birthDate}
                        sx={{ mt: 2 }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3} sm={3}>
                <FormTextField
                  type="number"
                  label="99999.00"
                  placeholder="99999.00"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="income"
                  name="income"
                  autoComplete="income"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="phone-number"
                  name="phone-number"
                  autoComplete="phone-number"
                  label="(99) 99999-9999"
                  placeholder="(99) 99999-9999"
                />
              </Grid>
              <Grid item xs>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  select
                  required
                  fullWidth
                  id="college-select"
                  label="Selecione uma faculdade"
                  placeholder="Selecione"
                  name="college"
                  autoComplete="college"
                  onChange={handleCollegesOnChange}
                  value={formik.values.college.name}
                >
                  {colleges.map((currCollege) => (
                    <MenuItem key={currCollege.name} value={`${currCollege.name}`}>
                      {currCollege.city}
                    </MenuItem>
                  ))}
                </FormTextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="about"
                  label="Conte um pouco sobre você!"
                  name="about"
                  autoComplete="about"
                  multiline
                  rows={8}
                  placeholder="Conte um pouco sobre você!"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Paper
              elevation={6}
              sx={{
                m: 2,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                padding: 5,
                alignItems: 'center',
                boxShadow: '6px 6px 15px #A8AAAD',
              }}
            >
              <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72 }}>
                <LockRounded />
              </Avatar>
              <Typography
                component="h1"
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontWeight: '600',
                  fontSize: '1.7em',
                }}
              >
                Dados para Login
              </Typography>
              <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                <Grid item xs={10} sm={10}>
                  <FormTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    placeholder="email@example.com"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={10} sm={10}>
                  <FormTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    placeholder="Password"
                    name="password"
                    autoComplete="password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={10} sm={10}>
                  <FormTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="confirm-password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    name="confirm-password"
                    autoComplete="confirm-password"
                    type="password"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {openDialog && (
            <GraduateCoursesDialog buttonText="Selecionar" open={openDialog} titleText="Qual o seu curso?" />
          )}
          {formik.touched.course && Boolean(formik.errors.course) && (
            <SnackBar
              severity="error"
              hasOpen={Boolean(formik.errors.course)}
              text={String(CONSTANTS.MESSAGES.VALIDATION.COURSE)}
            />
          )}
        </Grid>
      </CourseDialogContext.Provider>
    </>
  );
};

export default GraduateForm;
