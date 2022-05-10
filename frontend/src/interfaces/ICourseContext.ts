import ICourse from './ICourse';

export default interface ICourseContext {
  collgeId: number;
  course: ICourse;
  setCourse: React.Dispatch<React.SetStateAction<ICourse>>;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
