"use client";
import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { useUsersMutation } from "@/redux/features/user/userApi";
import type { signUpDetails } from "@/types";


const SignUp = () => {
  function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Journeo
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  // TODO remove, this demo shouldn't need to reset the theme.
  // const defaultTheme = createTheme();
  const [open, setOpen] = useState(false);
  const [addUser, { data }] = useUsersMutation();
  const router = useRouter();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [formErrors,setFormErrors] = useState({
    firstNameError:false,
    lastNameError:false,
    usernameError:false,
    emailError:false,
    emailFormatError:false,
    passwordError:false,
    rePasswordError:false,
    passwordMismatchError:false,
  })

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const signUpDetails: signUpDetails = {
      first_name: data.get("firstName") as string,
      last_name: data.get("lastName") as string,
      username: data.get("username") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
      re_password: data.get("rePassword") as string,
    };

    const newFormErrors = {
      firstNameError: !signUpDetails.first_name,
      lastNameError: !signUpDetails.last_name,
      usernameError: !signUpDetails.username,
      emailError: !signUpDetails.email ,
      emailFormatError:!emailRegex.test(signUpDetails.email),
      passwordError: !signUpDetails.password,
      rePasswordError: !signUpDetails.re_password,
      passwordMismatchError: signUpDetails.password !== signUpDetails.re_password,
    };
    setFormErrors(newFormErrors)
    const hasErrors = Object.values(formErrors).some(error => error);

    if(!hasErrors){
      try {
        const response = await addUser(signUpDetails).unwrap();
        console.log(response)

        // TODO: come back and change this to response.ok
        if (response.id) {
          setOpen(true);
        } else {
          console.log(response);
        }
      } catch (error) {
        // console.log(error.data);
      }
    }
  };

  return (
    // <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Snackbar 
          open={open} 
          autoHideDuration={10000} 
          onClose={handleClose} 
          anchorOrigin={{vertical:"top",horizontal: "center"}}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account created successfully check your for email an account activation link
          </Alert>
        </Snackbar>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={formErrors.firstNameError}
                  helperText={
                    formErrors.firstNameError
                    ? "First Name is required" : ''
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={formErrors.lastNameError}
                  helperText={
                    formErrors.lastNameError
                    ? "Last Name is required" : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  error={formErrors.usernameError}
                  helperText={
                    formErrors.usernameError
                    ? "Username is required" : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={formErrors.emailError || formErrors.emailFormatError}
                  helperText= {
                    formErrors.emailError 
                    ? "Email is required"
                    : formErrors.emailFormatError
                    ? "Email is invalid" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={formErrors.passwordError || formErrors.passwordMismatchError}
                  helperText={
                    formErrors.passwordError
                    ? "Password is required"
                    : formErrors.passwordMismatchError ? "Passwords did not match" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="rePassword"
                  label="Confirm Password"
                  type="password"
                  id="rePassword"
                  autoComplete="new-password"
                  error={formErrors.rePasswordError || formErrors.passwordMismatchError}
                  helperText={
                    formErrors.passwordError
                    ? "Confirm Password is required"
                    : formErrors.passwordMismatchError ? "Passwords did not match" : ""
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    // </ThemeProvider>
  );
};
export default SignUp;
