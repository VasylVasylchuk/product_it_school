import React from "react";
import { Formik, useFormik } from "formik";
import { DialogContentText, TextField } from "@mui/material";
import * as Yup from "yup";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Z0-9_-]+$/,
      '* Use: a-z, A-Z , numbers 1-9, also symbols "-" and "_"'
    )
    .min(5, "minimum name size")
    .max(9, "maximum name size")
    .required("Required"),
email: Yup.string().email("* Invalid email address").required("Required"),
  tel: Yup.string() // тут все одно string так як намбер не перевіряє length і створений
    .length(12, "* must be 12 numbers")
    .matches(/^[0-9]+$/, "* Only numbers")
    .required("Required"),
  city: Yup.string(), // тут без перевірки так як мало які назви
  street: Yup.string(), // тут без перевірки так як мало які назви
  code: Yup.string()
    .matches(/[0-9]/, "* Only numbers") // тут стрінга так як намбер теж не дуже підходить.
    .length(6, "* must be 6 numbers"),
});

const FormValidation = ({ handleClose, savedRegistrationValues }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
      city: "",
      street: "",
      code: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      savedRegistrationValues(values);
      handleClose();
      setTimeout(() => {
        alert("Congratulations! You are registered");
        setSubmitting(false);
      }, 400);
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Name"
        type="text"
        name="name"
        fullWidth
        variant="standard"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        error={errors.name && touched.name && errors.name}
        helperText={errors.name && touched.name && errors.name}
      />
      <TextField
        id="standard-basic"
        label="Email Address"
        fullWidth
        variant="standard"
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={errors.email && touched.email && errors.email}
        helperText={errors.email && touched.email && errors.email}
      />
      <TextField
        margin="dense"
        id="standard-basic"
        label="Telephone"
        type="tel"
        name="tel"
        fullWidth
        variant="standard"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.tel}
        error={errors.tel && touched.tel && errors.tel}
        helperText={errors.tel && touched.tel && errors.tel}
      />
      <DialogContentText
        sx={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}
      >
        Enter your address
      </DialogContentText>
      <TextField
        sx={{ marginRight: "20px" }}
        margin="dense"
        id="standard-basic"
        label="City"
        type="text"
        name="city"
        variant="standard"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.city}
        error={errors.city && touched.city && errors.city}
        helperText={errors.city && touched.city && errors.city}
      />
      <TextField
        margin="dense"
        id="standard-basic"
        label="Street"
        name="street"
        type="text"
        variant="standard"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.street}
        error={errors.street && touched.street && errors.street}
        helperText={errors.street && touched.street && errors.street}
      />
      <TextField
        margin="dense"
        id="standard-basic"
        label="Post code"
        name="code"
        type="text" // тут не подойдет намбер
        variant="standard"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.code}
        error={errors.code && touched.code && errors.code}
        helperText={errors.code && touched.code && errors.code}
      />
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Login</Button>
      </DialogActions>
    </form>
  );
};

export default FormValidation;
