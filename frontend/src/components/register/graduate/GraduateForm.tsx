import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useFormikContext } from 'formik';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockRounded from '@mui/icons-material/LockRounded';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { KeyboardDatePicker } from '@material-ui/pickers';

import FormTextField from '../../styles/FormTextField';
import Logo from '../../Logo';
import graduateLogoImg from '../../../assets/graduation-hat-and-diploma-black.png';
import IGraduate from '../../../interfaces/IGraduate';
import CONSTANTS from '../../../commons/Constants';
import ICollege from '../../../interfaces/ICollege';
import GraduateCoursesDialog from '../../GraduateCoursesDialog';
import SnackBar from '../../SnackBar';

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

  return (
    <>
      <Container component="main" maxWidth="xl">
        <Logo
          width={62}
          height={62}
          textLogo="FORMANDO"
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

        <Box sx={{ flexGrow: 1 }}>
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

                <KeyboardDatePicker
                  format={CONSTANTS.DATE.BRAZILIAN}
                  clearable
                  value={formik.values?.birthDate}
                  onChange={formik.handleChange}
                  minDate={new Date()}
                  error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                  helperText={formik.errors.birthDate}
                  placeholder="10/10/2018"
                />

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

                <FormTextField
                  label="99999.00"
                  placeholder="99999.00"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="income"
                  name="income"
                  autoComplete="income"
                  mask="99999.00"
                />
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="about"
                  label="Conte um sobre você!"
                  name="about"
                  autoComplete="about"
                  multiline
                  placeholder="Conte um sobre você!"
                />
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  select
                  required
                  fullWidth
                  id="college"
                  label="Selecione uma faculdade"
                  placeholder="Selecione"
                  name="college"
                  autoComplete="college"
                  onChange={handleCollegesOnChange}
                >
                  {colleges.map((currCollege) => (
                    <MenuItem key={currCollege.id} value={`${currCollege.name}`}>
                      {currCollege.city}
                    </MenuItem>
                  ))}
                </FormTextField>
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
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  select
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  placeholder="email@example.com"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  select
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  placeholder="Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                />
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
                  autoFocus
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default GraduateForm;
