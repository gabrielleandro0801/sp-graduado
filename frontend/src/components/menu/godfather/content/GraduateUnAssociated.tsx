import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import LoadingButton from '@mui/lab/LoadingButton';
import Pagination from '@mui/material/Pagination';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { AlertColor } from '@mui/material';

import IAssociatedGraduatesPagination from '../../../../interfaces/IAssociatedGraduatesPagination';
import Utils from '../../../../commons/Utils';
import CONSTANTS from '../../../../commons/Constants';

const MOCKED_GRADUATES: any = {
  previousPage: null,
  currentPage: 0,
  nextPage: null,
  last: true,
  totalPages: 1,
  totalItems: 2,
  maxItemsPerPage: 50,
  totalItemsPage: 2,
  items: [
    {
      id: 2,
      sponsor_id: null,
      course_college_id: null,
      description:
        'Lorem ipsum etiam morbi eros velit, ad rutrum consectetur pharetra lacinia auctor, ultricies etiam ipsum fermentum. pellentesque dictum imperdiet, tincidunt. ',
      name: 'Matheus Carpeggiane',
      email: 'matheuscarpeggiane@gmail.com',
      phone: '11968340465',
      income: 2000.0,
      birth_date: '22/01/2001',
    },
    {
      id: 4,
      sponsor_id: null,
      course_college_id: 12,
      description:
        'Lorem ipsum etiam morbi eros velit, ad rutrum consectetur pharetra lacinia auctor, ultricies etiam ipsum fermentum. pellentesque dictum imperdiet, tincidunt. ',
      name: 'Marcos Souza',
      email: 'marcos@gmail.com',
      phone: '11979922135',
      income: 1500.0,
      birth_date: '01/06/1994',
    },
    {
      id: 3,
      sponsor_id: null,
      course_college_id: null,
      description:
        'Lorem ipsum etiam morbi eros velit, ad rutrum consectetur pharetra lacinia auctor, ultricies etiam ipsum fermentum. pellentesque dictum imperdiet, tincidunt. ',
      name: 'Biri Chompiras',
      email: 'birichompiras@gmail.com',
      phone: '11968340465',
      income: 2000.0,
      birth_date: '22/01/2001',
    },
    {
      id: 6,
      sponsor_id: null,
      course_college_id: 12,
      description:
        'Lorem ipsum etiam morbi eros velit, ad rutrum consectetur pharetra lacinia auctor, ultricies etiam ipsum fermentum. pellentesque dictum imperdiet, tincidunt. ',
      name: 'Maria Souza',
      email: 'maria@gmail.com',
      phone: '11979922135',
      income: 1500.0,
      birth_date: '01/06/1994',
    },
    {
      id: 7,
      sponsor_id: null,
      course_college_id: null,
      description:
        'Lorem ipsum etiam morbi eros velit, ad rutrum consectetur pharetra lacinia auctor, ultricies etiam ipsum fermentum. pellentesque dictum imperdiet, tincidunt. ',
      name: 'Biri Jims',
      email: 'birijims@gmail.com',
      phone: '11968340465',
      income: 2000.0,
      birth_date: '22/01/2001',
    },
    {
      id: 8,
      sponsor_id: null,
      course_college_id: 12,
      description:
        'Lorem ipsum etiam morbi eros velit, ad rutrum consectetur pharetra lacinia auctor, ultricies etiam ipsum fermentum. pellentesque dictum imperdiet, tincidunt. ',
      name: 'José Souza',
      email: 'js@gmail.com',
      phone: '11979922135',
      income: 1500.0,
      birth_date: '01/06/1994',
    },
  ],
};

const openDialogInitialvalues = { open: false, message: '', severity: 'info' };

const unAssociatedGraduatesInitialValues: IAssociatedGraduatesPagination = {
  pagination: {
    previousPage: 0 || null,
    currentPage: 0,
    nextPage: 0 || null,
    lastPage: false,
    totalPages: 0,
    totalItems: 0,
    maxItemsPerPage: 0,
    totalItemsPage: 0,
    items: [],
  },
};

const NoGraduatesFoundContent = (): JSX.Element => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'italic',
            fontSize: '3em',
            fontWeight: 400,
            mx: 20,
            my: 1,
            marginTop: 15,
            letterSpacing: -1,
          }}
        >
          Não foi encontrado nenhum Graduando disponível para apadrinhamento!
        </Typography>
      </Box>
    </>
  );
};

const GraduateUnAssociatedContent = (): JSX.Element => {
  const [unAssociatedGraduates, setUnAssociatedGraduates] = React.useState(unAssociatedGraduatesInitialValues);
  const [page, setPage] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(openDialogInitialvalues);
  const [subimitting, setSubimitting] = React.useState(false);

  const handleClose = (): void => {
    setOpenDialog(openDialogInitialvalues);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, nextPage: number): void => {
    setPage(nextPage);
  };

  const handleOnClicPatronize = async (graduateId: number): Promise<void> => {
    try {
      setSubimitting(true);
      await Utils.sleep(2000);
      setUnAssociatedGraduates({
        pagination: {
          ...unAssociatedGraduates.pagination,
          items: unAssociatedGraduates.pagination.items.filter((graduate) => graduate.id !== graduateId),
        },
      });
      setOpenDialog({
        open: true,
        message: CONSTANTS.MESSAGES.BACKEND.PATRONIZE.SUCCESS,
        severity: 'success',
      });
    } finally {
      setSubimitting(false);
    }
  };

  const loadUnAssociatedGraduates = async (): Promise<void> => {
    setUnAssociatedGraduates({
      pagination: {
        previousPage: MOCKED_GRADUATES.previousPage,
        currentPage: MOCKED_GRADUATES.currentPage,
        nextPage: MOCKED_GRADUATES.nextPage,
        lastPage: MOCKED_GRADUATES.last,
        totalPages: MOCKED_GRADUATES.totalPages,
        totalItems: MOCKED_GRADUATES.totalItems,
        maxItemsPerPage: MOCKED_GRADUATES.maxItemsPerPage,
        totalItemsPage: MOCKED_GRADUATES.totalItemsPage,
        items: MOCKED_GRADUATES.items,
      },
    });
  };

  React.useEffect(() => {
    loadUnAssociatedGraduates();
  }, [page]);

  return (
    <>
      {!unAssociatedGraduates.pagination.items.length ? (
        <NoGraduatesFoundContent />
      ) : (
        <>
          <Container maxWidth="lg" sx={{ mb: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography
                sx={{
                  flexGrow: 1,
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'italic',
                  fontSize: '3.5em',
                  fontWeight: 400,
                  mx: 1,
                  my: 1,
                  letterSpacing: -1,
                }}
              >
                Seja o Padrinho do sonho de um Graduando!
              </Typography>
            </Box>
          </Container>
          <Grid container spacing={3}>
            {unAssociatedGraduates.pagination.items.map((graduate: any) => (
              <Grid item key={`${graduate.id}-${graduate.email}-${graduate.phone}`}>
                <Card
                  elevation={6}
                  variant="elevation"
                  sx={{
                    maxWidth: 345,
                    borderRadius: 3,
                  }}
                >
                  <CardHeader
                    avatar={<Avatar>{String(graduate.name).substring(0, 1)}</Avatar>}
                    title={graduate.name}
                    subheader={`${graduate.email}`}
                  />
                  <CardContent>
                    <Typography variant="body1" color="text.primary">
                      {graduate.description}
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Grid container spacing={2} alignContent="center">
                      <Grid item xs={4}>
                        <Typography variant="body2" color="text.secondary">
                          {graduate.phone}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="primary.dark">
                          {Intl.NumberFormat('pt-BR', {
                            maximumSignificantDigits: 2,
                            style: 'currency',
                            currency: 'BRL',
                          }).format(graduate.income)}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="text.secondary">
                          {graduate.birth_date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid container alignContent="center">
                      <Grid item>
                        <LoadingButton loading={subimitting} onClick={() => handleOnClicPatronize(graduate.id)}>
                          Apadrinhar
                        </LoadingButton>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Pagination
          variant="outlined"
          count={unAssociatedGraduates.pagination.totalPages}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          onChange={handlePageChange}
          color="primary"
          sx={{
            marginTop: 10,
          }}
        />
      </Box>
      {openDialog.open && (
        <Snackbar open={openDialog.open} autoHideDuration={5000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={openDialog.severity as AlertColor}
            sx={{ width: '100%', filter: 'saturate(1.2)' }}
          >
            {openDialog.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default GraduateUnAssociatedContent;
