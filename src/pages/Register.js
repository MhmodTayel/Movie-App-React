import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";

import "./Register.css";

export default function Register() {
  const [formValues, setFormValues] = useState({
    Email: "",
    password: "",
    username: "",
    name: "",
    repeatPassword: "",
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    EmailErr: null,
    passwordErr: null,
    usernameErr: null,
    nameErr: null,
    repeatPasswordErr: null,
  });

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
              : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                  event.target.value
                )
              ? "Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character "
              : null,
        });
        break;

      case "name":
        setFormValues({
          ...formValues,
          name: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          nameErr:
            event.target.value.length === 0 ? "This field is required" : null,
        });
        break;

      case "username":
        setFormValues({
          ...formValues,
          username: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          usernameErr:
            event.target.value.length === 0
              ? "This field is required!"
              : event.target.value.includes(" ")
              ? "username must have no spaces"
              : null,
        });
        break;

      case "repeatPassword":
        setFormValues({
          ...formValues,
          repeatPassword: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          repeatPasswordErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value !== formValues.password
              ? "Enter the same password"
              : null,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !formValuesErrors.EmailErr &&
      !formValuesErrors.passwordErr &&
      !formValuesErrors.nameErr &&
      !formValuesErrors.usernameErr &&
      !formValuesErrors.repeatPasswordErr
    ) {
      console.log(formValues);
    }
  };

  return (
    <form
      className="loginForm"
      onSubmit={(e) => handleSubmitForm(e)}
      autoComplete="off"
    >
      <h1>Register</h1>
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
        <InputLabel htmlFor="name">name </InputLabel>
        <Input
          id="name"
          aria-describedby="my-helper-text"
          value={formValues.name}
          onChange={(e) => handleFormChange(e)}
          name="name"
        />
        {formValuesErrors.nameErr && (
          <FormHelperText id="my-helper-text">
            {formValuesErrors.nameErr}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="username">username </InputLabel>
        <Input
          id="username"
          aria-describedby="my-helper-text"
          value={formValues.username}
          onChange={(e) => handleFormChange(e)}
          name="username"
        />
        {formValuesErrors.usernameErr && (
          <FormHelperText id="my-helper-text">
            {formValuesErrors.usernameErr}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          aria-describedby="Password"
          value={formValues.password}
          onChange={(e) => handleFormChange(e)}
          name="password"
        />
        {formValuesErrors.passwordErr && (
          <FormHelperText id="my-helper-text">
            {formValuesErrors.passwordErr}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="repeatPassword">repeat password</InputLabel>
        <Input
          id="repeatPassword"
          type="password"
          aria-describedby="repeatPassword"
          value={formValues.repeatPassword}
          onChange={(e) => handleFormChange(e)}
          name="repeatPassword"
        />
        {formValuesErrors.repeatPasswordErr && (
          <FormHelperText id="my-helper-text">
            {formValuesErrors.repeatPasswordErr}
          </FormHelperText>
        )}
      </FormControl>

      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  );
}
