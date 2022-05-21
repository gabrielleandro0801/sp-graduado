import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';
import { TransitionProps } from '@mui/material/transitions';
import { useFormikContext } from 'formik';
import Button from '@mui/material/Button';

import ICourse from '../interfaces/ICourse';
import ICoursePagination from '../interfaces/ICoursePagination';
import IGraduate from '../interfaces/IGraduate';
import CouseDialogContext from './contexts/CourseDialog';

const MOCKED_COURSES = {
  previousPage: null,
  currentPage: 0,
  nextPage: 1,
  last: false,
  totalPages: 1,
  totalItems: 114,
  maxItemsPerPage: 50,
  totalItemsPage: 50,
  items: [
    {
      id: 2,
      semesters: 10,
      period: 'Noturno',
      modality: 'Presencial',
      name: 'Direito',
      category: 'Humanas',
    },
    {
      id: 2,
      semesters: 10,
      period: 'Matutino',
      modality: 'Presencial',
      name: 'Direito',
      category: 'Humanas',
    },
    {
      id: 2,
      semesters: 10,
      period: 'Noturno',
      modality: 'Presencial',
      name: 'Engenharia Civil',
      category: 'Exatas',
    },
    {
      id: 2,
      semesters: 10,
      period: 'Matutino',
      modality: 'Presencial',
      name: 'Engenharia Civil',
      category: 'Exatas',
    },
    {
      id: 3,
      semesters: 10,
      period: 'Noturno',
      modality: 'Presencial',
      name: 'Matemática',
      category: 'Exatas',
    },
    {
      id: 3,
      semesters: 10,
      period: 'Matutino',
      modality: 'Presencial',
      name: 'Matemática',
      category: 'Exatas',
    },
    {
      id: 3,
      semesters: 10,
      period: 'Noturno',
      modality: 'Presencial',
      name: 'Filosofia',
      category: 'Humanas',
    },
    {
      id: 3,
      semesters: 10,
      period: 'Matutino',
      modality: 'Presencial',
      name: 'Filosofia',
      category: 'Humanas',
    },
  ],
};

const coursesInitialValues: ICoursePagination = {
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
interface IGraduateCoursesDialogProps {
  open: boolean;
  titleText: string;
  buttonText: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GraduateCoursesDialog = (props: IGraduateCoursesDialogProps): JSX.Element => {
  const { titleText, buttonText, open: openProps } = props;

  const [open, setOpen] = React.useState(openProps);
  const [courses, setCourses] = React.useState(coursesInitialValues);
  const [page, setPage] = React.useState(1);
  const { setOpenDialog } = React.useContext(CouseDialogContext);

  const formik = useFormikContext<IGraduate>();

  const loadCourses = (): void => {
    const mockedCourses = MOCKED_COURSES.items.filter((currCourse: ICourse) => {
      return currCourse.id === formik.values.college.id;
    });
    setCourses({
      pagination: {
        previousPage: MOCKED_COURSES.previousPage,
        currentPage: MOCKED_COURSES.currentPage,
        nextPage: MOCKED_COURSES.nextPage,
        lastPage: MOCKED_COURSES.last,
        totalPages: MOCKED_COURSES.totalPages,
        totalItems: MOCKED_COURSES.totalItems,
        maxItemsPerPage: MOCKED_COURSES.maxItemsPerPage,
        totalItemsPage: MOCKED_COURSES.totalItemsPage,
        items: mockedCourses,
      },
    });
  };

  const handleOnClickDialog = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selectedCourse: ICourse,
  ): void => {
    formik.setFieldValue('course', selectedCourse);
    setOpen(false);
    setOpenDialog(false);
  };

  const handleOnClose = (): void => {
    setOpen(false);
    setOpenDialog(false);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, nextPage: number): void => {
    setPage(nextPage);
  };

  React.useEffect(() => {
    loadCourses();
  }, [page]);

  return (
    <Dialog open={open} keepMounted onClose={handleOnClose} TransitionComponent={Transition}>
      <DialogTitle color="primary.main" sx={{ fontWeight: 500, fontSize: '1.1em' }}>
        {titleText}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 1, flexGrow: 1 }}>
          <>
            <Grid container spacing={3}>
              {courses.pagination.items.map((item: ICourse) => (
                <Grid key={`${item.id}-${item.modality}-${item.period}-${item.category}`} item xs={6}>
                  <Card sx={{ minWidth: 245, bgcolor: 'background.paper', m: 1, boxShadow: '6px 6px 15px #A8AAAD' }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: '1.4em', fontWeight: 800, bgColor: 'primary.main' }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                      <Divider sx={{ padding: 1, mb: 2 }} />
                      <Typography sx={{ fontSize: '1.2em', fontWeight: 500 }} color="gray" gutterBottom>
                        {`Categoria: ${item.category}`}
                      </Typography>
                      <Typography sx={{ fontSize: '1.2em', fontWeight: 500 }} color="gray" gutterBottom>
                        {`Modalidade: ${item.modality}`}
                      </Typography>
                      <Typography sx={{ fontSize: '1.2em', fontWeight: 500 }} color="gray" gutterBottom>
                        {`Período: ${item.period}`}
                      </Typography>
                      <Typography sx={{ fontSize: '1.2em', fontWeight: 500 }} color="gray" gutterBottom>
                        {`Semestres: ${item.semesters}`}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={(event) => handleOnClickDialog(event, item)}>{buttonText}</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
          <Pagination
            count={courses.pagination.totalPages}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            onChange={handlePageChange}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default GraduateCoursesDialog;
