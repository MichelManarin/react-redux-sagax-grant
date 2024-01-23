import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";

import { Grid, Paper, Box, Typography, Button, Divider } from "@mui/material";

import { loginRequest } from "../../store/actions";
import { Form } from "@unform/web";
export default function AuthenticationPage() {
  const styleError = { color: "red" };
  const dispatch = useDispatch();

  const { error, token, expirationDate } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    dispatch(loginRequest(form));
  };

  const initalData = {
    login: "",
    password: "",
  };

  const [form, setForm] = useState(initalData);

  useEffect(() => {
    if (!error && token && expirationDate) {
      const currentDate = new Date();
      const redirect = new Date(expirationDate) > currentDate;

      if (redirect) {
        const baseUrl = window.location.origin;
        const url = baseUrl + "/products";
        window.location.href = url;
      }
    }
  }, [error, token, expirationDate]);

  return (
    <div id="login">
      <Grid
        className="container-login"
        container
        spacing={2}
        direction="column"
      >
        <Grid item xs={12}>
          <Paper elevation={0} variant="elevation">
            <Box className="box form-login ">
              <Grid container spacing={2} style={{ margin: "auto" }}>
                <Grid item xs={12}>
                  <Grid container spacing={0} direction="column-reverse">
                    <Grid item>
                      <Typography variant="h6" gutterBottom>
                        🚀 Welcome back
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      autoComplete={"off"}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="login"
                      label="Login"
                      name="login"
                      value={form.login}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          login: e.target.value,
                        })
                      }
                    />
                    <TextField
                      autoComplete={"off"}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={form.password}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          password: e.target.value,
                        })
                      }
                    />
                    {error && <p style={styleError}>{error}</p>}
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={{ marginTop: 16 }}
                      onClick={handleSubmit}
                    >
                      Sign In
                    </Button>
                  </Form>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <div className="css-9jay18">
            <Typography variant="subtitle2">GrantAdvance Test</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
