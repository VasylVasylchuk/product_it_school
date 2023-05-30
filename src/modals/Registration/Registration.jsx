import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import FormValidation from './FormValidation';
import savedRegistration from './SavedRegistration';

function Registration() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Button variant='outlined' onClick={handleOpen}>
                Sign up
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{textAlign: 'center', fontWeight: 'bold'}}>Registration form</DialogTitle>
                <DialogContent sx={{ width: '90%' }}>
                    <FormValidation handleClose={handleClose} savedRegistration={savedRegistration} />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Registration;