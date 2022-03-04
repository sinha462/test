import React from "react";
import "./login.css";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import Rocket from "../rocket.png";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";
import * as Yup from "yup";

const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: 832,
    width: 500,
    margin: "0 auto",
    float: "left",
  };
  const headerStyle = { margin: 0 };
  const btnStyle = { margin: "8px 0", backgroundColor: "#000", color: "#fff" };
  const avatarStyle = { backgroundColor: "#000" };
  const marginTop = { marginTop: 5 };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <>
    <div className="locate"> 
      <div className="byleft"> 
        <Grid>
          <Paper style={paperStyle}>
            <Grid align="center">
              <br />
              <br />
              <Avatar style={avatarStyle}></Avatar>
              <h2 className="heading" style={headerStyle}>
                Sign Up
              </h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to create an account !
              </Typography>
            </Grid>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    fullWidth
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    helperText={<ErrorMessage name="name" />}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    helperText={<ErrorMessage name="email" />}
                  />
                  <br />
                  <br />
                  <FormControl component="fieldset" style={marginTop}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <Field
                      as={RadioGroup}
                      aria-label="gender"
                      name="gender"
                      style={{ display: "initial" }}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </Field>
                  </FormControl>
                  <FormHelperText>
                    <ErrorMessage name="gender" />
                  </FormHelperText>
                  <Field
                    as={TextField}
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    helperText={<ErrorMessage name="phoneNumber" />}
                  />
                  <br />
                  <br />
                  <Field
                    as={TextField}
                    fullWidth
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    helperText={<ErrorMessage name="password" />}
                  />
                  <Field
                    as={TextField}
                    fullWidth
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    helperText={<ErrorMessage name="confirmPassword" />}
                  />
                  <br />
                  <br />
                  <FormControlLabel
                    control={<Field as={Checkbox} name="termsAndConditions" />}
                    label="I accept the terms and conditions."
                  />
                  <br />
                  <br />
                  <FormHelperText>
                    <ErrorMessage name="termsAndConditions" />
                  </FormHelperText>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={props.isSubmitting}
                    style={btnStyle}
                  >
                    {props.isSubmitting ? "Loading" : "Sign up"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </div>
      <div className="byright">
        <img src={Rocket} className="image" alt="" />
      </div>
      </div>
    </>
  );
};

export default Signup;
