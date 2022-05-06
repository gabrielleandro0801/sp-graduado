import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockRounded from '@mui/icons-material/LockRounded';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import StyledTextField from '../styles/TextField';
import Logo from '../Logo';
import graduateLogoImg from '../../assets/graduation-hat-and-diploma-black.png';
import GraduateRegisterFormValidation from '../../validations/GraduateRegisterForm';
import IGraduate from '../../interfaces/IGraduate';
import DateTime from '../../commons/DateTime';
import CONSTANTS from '../../commons/Constants';

type College = {
  id: number;
  name: string;
  city: string;
};

type Course = {
  id: number;
  semesters: number;
  period: string;
  modality: string;
  course: string;
  category: string;
};

const MOCKED_COLLEGES: College[] = [
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

const MOCKED_COURSES: Course[] = [
  {
    id: 2,
    semesters: 10,
    period: 'Noturno',
    modality: 'Presencial',
    course: 'Direito',
    category: 'Humanas',
  },
  {
    id: 2,
    semesters: 10,
    period: 'Matutino',
    modality: 'Presencial',
    course: 'Direito',
    category: 'Humanas',
  },
  {
    id: 3,
    semesters: 10,
    period: 'Noturno',
    modality: 'Presencial',
    course: 'Filosofia',
    category: 'Humanas',
  },
  {
    id: 3,
    semesters: 10,
    period: 'Matutino',
    modality: 'Presencial',
    course: 'Filosofia',
    category: 'Humanas',
  },
];

const GraduateForm = (): JSX.Element => {
  const initialValues: IGraduate = GraduateRegisterFormValidation.getInitialValues();
  const collegeInitialValues: College = initialValues.course.college;
  const courseInitialValues: Course = {
    id: initialValues.course.college.id,
    category: initialValues.course.category,
    course: initialValues.course.name,
    modality: initialValues.course.modality,
    period: initialValues.course.period,
    semesters: initialValues.course.semesters,
  };

  const [colleges, setColleges]: [Array<College>, React.Dispatch<React.SetStateAction<Array<College>>>] =
    React.useState([] as Array<College>);
  const [courses, setCourses]: [Array<Course>, React.Dispatch<React.SetStateAction<Array<Course>>>] = React.useState(
    [] as Array<Course>,
  );
  const [college, setCollege]: [College, React.Dispatch<React.SetStateAction<College>>] =
    React.useState(collegeInitialValues);
  const [course, setCourse]: [Course, React.Dispatch<React.SetStateAction<Course>>] =
    React.useState(courseInitialValues);

  const loadColleges = (): void => {
    const mockedColleges = MOCKED_COLLEGES;
    setColleges(mockedColleges);
  };

  const loadCourses = (): void => {
    const mockedCourses = MOCKED_COURSES.filter((currCourse: Course) => currCourse.id === college.id);
    setCourses(mockedCourses);
  };

  const resetState = (): void => {
    setColleges([]);
    setCollege(collegeInitialValues);
    setCourses([]);
    setCourse(courseInitialValues);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: GraduateRegisterFormValidation.getValidationSchema(),
    onSubmit: (fields: IGraduate, { resetForm, setSubmitting }) => {
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
      resetState();
      // TODO: Call API TO register And save context into localStorage
    },
  });

  React.useEffect(() => {
    loadCourses();
  }, [college.id]);

  const handleCollegesOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [currentCollege]: College[] = colleges.filter(
      (currCollege: College) => currCollege.name === event.target.value,
    );

    formik.handleChange(event);
    setCollege(currentCollege);
  };

  const handleCoursesOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [currentCourse]: Course[] = courses.filter((currCourse: Course) => currCourse.course === event.target.value);

    formik.handleChange(event);
    setCourse(currentCourse);
  };

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

        <Box component="form" sx={{ flexGrow: 1 }}>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  value={formik.values.name}
                />
                <InputMask mask="000.000.000-00" value={formik.values.documentNumber} onChange={formik.handleChange}>
                  {(inputformik: any) => (
                    <StyledTextField
                      {...inputformik}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="cpf"
                      name="cpf"
                      autoComplete="cpf"
                      autoFocus
                      onBlur={formik.handleBlur}
                      error={formik.touched.documentNumber && Boolean(formik.errors.documentNumber)}
                      helperText={formik.touched.documentNumber && formik.errors.documentNumber}
                    />
                  )}
                </InputMask>
                <InputMask mask="00/00/000" value={formik.values.birthDate} onChange={formik.handleChange}>
                  {(inputformik: any) => (
                    <StyledTextField
                      {...inputformik}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="birth-date"
                      name="birth-date"
                      autoComplete="birth-date"
                      autoFocus
                      onBlur={formik.handleBlur}
                      error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                      helperText={formik.touched.birthDate && formik.errors.birthDate}
                    />
                  )}
                </InputMask>
                <InputMask
                  mask="(99) 99999-9999"
                  value={formik.values.contacts?.phoneNumber}
                  onChange={formik.handleChange}
                >
                  {(inputformik: any) => (
                    <StyledTextField
                      {...inputformik}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="phone-number"
                      name="phone-number"
                      autoComplete="phone-number"
                      autoFocus
                      onBlur={formik.handleBlur}
                      error={formik.touched.contacts?.phoneNumber && Boolean(formik.errors.contacts?.phoneNumber)}
                      helperText={formik.touched.contacts?.phoneNumber && formik.errors.contacts?.phoneNumber}
                    />
                  )}
                </InputMask>
                <InputMask mask="99999.00" value={formik.values.incomeFamily} onChange={formik.handleChange}>
                  {(inputformik: any) => (
                    <StyledTextField
                      {...inputformik}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="income"
                      name="income"
                      autoComplete="income"
                      autoFocus
                      onBlur={formik.handleBlur}
                      error={formik.touched.incomeFamily && Boolean(formik.errors.incomeFamily)}
                      helperText={formik.touched.incomeFamily && formik.errors.incomeFamily}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.about && Boolean(formik.errors.about)}
                  helperText={formik.touched.about && formik.errors.about}
                  value={formik.values.name}
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
                  onChange={handleCollegesOnChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.course?.college?.name && Boolean(formik.errors.course?.college?.name)}
                  helperText={formik.touched.course?.college?.name && formik.errors.course?.college?.name}
                  value={formik.values.course?.college?.name}
                >
                  {colleges.map((currCollege) => (
                    <MenuItem key={currCollege.id} value={`${currCollege.name}`}>
                      {currCollege.city}
                    </MenuItem>
                  ))}
                </StyledTextField>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.contacts?.email && Boolean(formik.errors.contacts?.email)}
                  helperText={formik.touched.contacts?.email && formik.errors.contacts?.email}
                  value={formik.values.contacts?.email}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  value={formik.values.password}
                />
                <StyledTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="confirm-password"
                  label="Confirm Password"
                  name="confirm-password"
                  autoComplete="confirm-password"
                  autoFocus
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  value={formik.values.confirmPassword}
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
