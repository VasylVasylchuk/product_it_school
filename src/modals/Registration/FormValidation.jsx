import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { DialogContentText, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z0-9_-]+$/, '* Use: a-z, A-Z, numbers 1-9, also symbols "-" and "_"')
        .min(5, 'minimum name size')
        .max(9, 'maximum name size')
        .required('Required'),
    email: Yup.string().email('* Invalid email address').required('Required'),
    tel: Yup.string()
        .length(12, '* must be 12 numbers')
        .matches(/^[0-9]+$/, '* Only numbers')
        .required('Required'),
    city: Yup.string(),
    street: Yup.string(),
    code: Yup.string()
        .matches(/[0-9]/, '* Only numbers')
        .length(6, '* must be 6 numbers')  
})

function FormValidation({handleClose, savedRegistration}) {
  return (
    <Formik 
        validationSchema = {validationSchema}
        initialValues = {{
            name: '',
            email: '',
            tel: '',
            city: '',
            street: '',
            code: ''
        }}
        onSubmit = {(values, { setSubmitting }) => {
            savedRegistration(values);
            handleClose();
            setTimeout(() => {
                alert('Your accout was created successfully');
                setSubmitting(false);
            }, 400)
        }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
        }) => (
            <form onSubmit={handleSubmit}>
                <DialogContentText sx={{textAlign: 'center', marginTop: '10px', fontWeight: 'bold'}}>
                    Enter your data
                </DialogContentText>
                <TextField
                    id = 'standart-basic'
                    label = "Name"
                    type = "text"
                    name = "name"
                    fullWidth
                    variant = 'standard'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    value = {values.name}
                    error = {errors.name && touched.name && errors.name}
                    helperText = {errors.name && touched.name && errors.name}
                />
                <TextField 
                    id = 'standart-basic'
                    label = "Email"
                    type = "email"
                    name = "email"
                    fullWidth
                    variant = 'standard'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    value = {values.email}
                    error = {errors.email && touched.email && errors.email}
                    helperText = {errors.email && touched.email && errors.email}
                />
                <TextField 
                    id = 'standart-basic'
                    label = "Telephone"
                    type = "tel"
                    name = "tel"
                    fullWidth
                    variant = 'standard'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    value = {values.tel}
                    error = {errors.tel && touched.tel && errors.tel}
                    helperText = {errors.tel && touched.tel && errors.tel}
                    margin = 'dense'
                />
                <DialogContentText sx={{textAlign: 'center', marginTop: '20px', fontWeight: 'bold'}}>
                    Enter your address
                </DialogContentText>
                <TextField 
                    id = 'standart-basic'
                    label = "City"
                    type = "text"
                    name = "city"
                    fullWidth
                    variant = 'standard'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    value = {values.city}
                    error = {errors.city && touched.city && errors.city}
                    helperText = {errors.city && touched.city && errors.city}
                />
                <TextField 
                    id = 'standart-basic'
                    label = "Street"
                    type = "text"
                    name = "street"
                    fullWidth
                    variant = 'standard'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    value = {values.street}
                    error = {errors.street && touched.street && errors.street}
                    helperText = {errors.street && touched.street && errors.street}
                />
                <TextField 
                    id = 'standart-basic'
                    label = "Post code"
                    type = "text"
                    name = "code"
                    fullWidth
                    variant = 'standard'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                    value = {values.code}
                    error = {errors.code && touched.code && errors.code}
                    helperText = {errors.code && touched.code && errors.code}
                />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Sign up</Button>
                </DialogActions>
            </form>
        )}
    </Formik>
  )
}

export default FormValidation;