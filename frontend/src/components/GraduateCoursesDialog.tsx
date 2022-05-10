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
import Button from '@mui/material/Button';

import ICourse from '../interfaces/ICourse';
import CourseContext from './contexts/Course';
import ICoursePagination from '../interfaces/ICoursePagination';

const MOCKED_COURSES = {
  previousPage: null,
  currentPage: 0,
  nextPage: 1,
  last: false,
  totalPages: 3,
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
  const { setCourse, setOpenDialog, collgeId } = React.useContext(CourseContext);

  const loadCourses = (): void => {
    const mockedCourses = MOCKED_COURSES.items.filter((currCourse: ICourse) => currCourse.id === collgeId);
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
    setCourse(selectedCourse);
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
            <Grid container direction="column" spacing={{ md: 1 }}>
              {courses.pagination.items.map((item: ICourse) => (
                <Grid key={item.id} item xs={2}>
                  <Card sx={{ minWidth: 245, bgcolor: 'background.paper', m: 1 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: '1.4em', fontWeight: 600, bgColor: 'primary.main' }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                      <Divider />
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
