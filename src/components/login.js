import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import Rocket from "../rocket.png";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import "./login.css";

const Login = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: 832, width: 500, margin: "0 auto", float: "left"}
    const avatarStyle = { backgroundColor: '#000' }
    const btnstyle = { margin: '8px 0', backgroundColor: "#000", color: '#fff'}
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    return (
        <>
        <div className='locate'>
        <div className='byleft'> 
        <Grid align='left'>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <br/><br/><br/><br/><br/>
                    <Avatar style={avatarStyle}></Avatar>
                    <h1 className='heading'>Sign In</h1>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Email' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                            /><br/><br/>
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} 
                            /><br/><br/>
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="dark"
                                    />
                                }
                                label="Remember me"
                            /><br/><br/>
                            <Button type='submit' color='dark' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle}>{props.isSubmitting ? "Loading" : "Sign in"}
                            </Button><br/><br/><br/><br/>
                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
        <div className="byright">
        <img src={Rocket} className="image" alt="" />
      </div>
      </div>
      </>
    )
}

export default Login