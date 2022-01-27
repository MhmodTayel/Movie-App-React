import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import "./Login.css";

export default function Login() {
  const [formValues, setFormValues] = useState({
    Email: "",
    password: "",
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    EmailErr: null,
    passwordErr: null,
  });

  const [show, setShow] = useState(false);

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "Email":
        setFormValues({
          ...formValues,
          Email: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          EmailErr:
            event.target.value.length === 0
              ? "This field is required"
              : !/^\S+@\S+\.\S+$/.test(event.target.value)
              ? "enter a vaild email"
              : null,
        });
        break;

      case "password":
        setFormValues({
          ...formValues,
          password: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          passwordErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value.length < 8
              ? "must be atleast 8 chars"
              : null,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formValuesErrors.EmailErr && !formValuesErrors.passwordErr) {
      console.log(formValues);
    }
  };

  const handleClickShowPassword = () => {
    setShow(!show);
  };

  return (
    <form
      className="loginForm"
      onSubmit={(e) => handleSubmitForm(e)}
      autoComplete="off"
    >
      <h1>Login</h1>
      <FormControl>
        <InputLabel htmlFor="Email">Email address</InputLabel>
        <Input
          id="Email"
          aria-describedby="my-helper-text"
          value={formValues.Email}
          onChange={(e) => handleFormChange(e)}
          name="Email"
        />
        {formValuesErrors.EmailErr && (
          <FormHelperText id="my-helper-text">
            {formValuesErrors.EmailErr}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type={show ? "txt" : "password"}
          aria-describedby="Password"
          value={formValues.password}
          onChange={(e) => handleFormChange(e)}
          name="password"
          endAdornment={
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {show ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />

        {formValuesErrors.passwordErr && (
          <FormHelperText id="my-helper-text">
            {formValuesErrors.passwordErr}
          </FormHelperText>
        )}
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        disabled={
          (formValues.Email == "" || formValues.password == "") ? true : false
        }
      >
        login
      </Button>
    </form>
  );
}
