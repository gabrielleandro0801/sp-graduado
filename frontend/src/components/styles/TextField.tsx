import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: theme.palette.mode === 'dark' ? '#FFF' : '#000',
  },
  boxShadow: 'inherit',
}));

export default StyledTextField;
