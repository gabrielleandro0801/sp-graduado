import React from 'react';
import { useFormikContext } from 'formik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CheckBox from '@mui/material/Checkbox';

import IGraduate from '../../../interfaces/IGraduate';
import IGodfather from '../../../interfaces/IGodfather';
import CONSTANTS from '../../../commons/Constants';
import DateTime from '../../../commons/DateTime';

const MOCKED_GRADUATE: IGraduate = {
  name: 'Alexandre Souza Rocha',
  about:
    'AAUSDHASUHDASUDHAS UDHAUDAHSUDASHUAHU ASAAUSDHASUHDAS UDHASUD HAUDAHSUDASHUAHUASAAUS DHASUHDASUDHAS UDHAUDAHSUDASHU AHUASAAUSDHASUHDASU DHASUDHAUDAHSU DASHUAH UAS',
  birthDate: '2000-07-29',
  incomeFamily: '1500',
  type: 'GRADUATE',
  contacts: {
    email: 'example@email.com',
    phoneNumber: '11953215110',
  },
  college: {
    id: 2,
    city: 'Pirapora do Bom Jesus',
    name: 'FATEC Pirapora',
  },
  documentNumber: '23097770801',
  termsAndCoditionsAccepted: true,
  course: {
    id: 300,
    category: 'Tecnologia',
    modality: 'Presencial',
    name: 'Análise e Desenvolvimento de Sistemas',
    period: 'Noturno',
    semesters: 6,
  },
  confirmPassword: 'MyPassword@2000',
  password: 'MyPassword@2000',
};

const GraduateConfirmRegistration = (): JSX.Element => {
  const formik = useFormikContext<IGraduate | IGodfather>();
  formik.values = MOCKED_GRADUATE;

  return (
    <>
      <Box sx={{ justifyContent: 'center' }}>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'inherit',
            fontSize: '2.5em',
            fontWeight: 700,
            m: 1,
            letterSpacing: -1,
          }}
        >
          {`Olá, ${(CONSTANTS.REGISTER_TYPE as any)[formik.values.type]}, ${formik.values.name}!`}
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'inherit',
            fontSize: '2.5em',
            fontWeight: 700,
            m: 1,
            letterSpacing: -1,
          }}
        >
          Confirme alguns dados para seguir com seu Registro!
        </Typography>
      </Box>
      <>
        <Grid container direction="row" sx={{ mt: 5, mb: 5 }}>
          <Grid item xs={12}>
            <Box>
              <Divider sx={{ m: 2 }} />
            </Box>
            <Grid container>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Nome:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Data de Nascimento:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {DateTime.toFormat(formik.values.birthDate, CONSTANTS.DATE.US, CONSTANTS.DATE.BRAZILIAN)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  CPF:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.documentNumber}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Telefone:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.contacts.phoneNumber}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Divider sx={{ m: 2 }} />
            </Box>
            <Grid container>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Email:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.contacts.email}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Senha:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {''.padStart(formik.values.password.length, '*')}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Confirmação da Senha:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {''.padStart(formik.values.confirmPassword.length, '*')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Divider sx={{ m: 2 }} />
            </Box>
            <Grid container>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Faculdade:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.college.name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Cidade:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.college.city}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Curso:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.course.name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Período:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.course.period}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Semestres:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.course.semesters}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Modalidade:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.course.modality}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Categoria:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.course.category}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Divider sx={{ m: 2 }} />
            </Box>
            <Grid container>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Renda Familiar:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {Number(formik.values.incomeFamily).toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  paragraph
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                    wordBreak: 'break-word',
                  }}
                >
                  Sobre Você:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.about}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Termos e Condições Aceitos:
                </Typography>
                <Grid item>
                  <CheckBox
                    id="terms-and-conditions-checkbox"
                    size="medium"
                    checked={formik.values.termsAndCoditionsAccepted}
                    disabled
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Divider sx={{ m: 2 }} />
        </Box>
      </>
    </>
  );
};

export default GraduateConfirmRegistration;
