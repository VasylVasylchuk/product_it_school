import React, {useState} from "react";
import {Button, Dialog, DialogContent, DialogTitle} from '@mui/material';
import FormValidation from "./FormValidation";

function ModalWinRegistration () {
  const [open, setOpen] = useState(false);

  const savedRegistrationValues = (values) => {
    const data = localStorage.getItem('users');
    if (data) {
      const savedValues = JSON.parse(data);
      savedValues.push(values);
      localStorage.setItem('users', JSON.stringify(savedValues))
    } else {
      localStorage.setItem('users', `[${JSON.stringify(values)}]`)
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Sign Up
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Registration form</DialogTitle>
          <DialogContent sx={{ width: '450px' }}>
            <FormValidation handleClose={handleClose} savedRegistrationValues={savedRegistrationValues} />
          </DialogContent>

        </Dialog>x
      </>
  );
}

export default ModalWinRegistration

