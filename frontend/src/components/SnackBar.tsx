import MUIAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MUIAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = ({ hasOpen, text }: { hasOpen: boolean; text: string }): JSX.Element => {
  const [open, setOpen] = React.useState(hasOpen);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{ width: '100%', bgcolor: 'primary.main', filter: 'saturate(1.2)' }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
