import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginClear } from "../store/actions";

import { Button } from "@mui/material";

export default function Logout() {
  const dispatch = useDispatch();

  const [redirectLogin, setRedirectLogin] = useState(false);
  const logout = () => {
    dispatch(loginClear());
    setRedirectLogin(true);
  };

  return (
    <>
      {redirectLogin && <Navigate to="/" />}
      <Button
        style={{color: "#fff", marginTop: "1rem"}}
        size="large"
        color="primary"
        variant="contained"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </>
  );
}
