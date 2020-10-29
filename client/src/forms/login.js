import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button, Box } from "@material-ui/core";
import { useFormik } from "formik";
import TextInput from "../components/formControls/text";
import XYAxisSpace from "../components/xyAxisSpace";

import { LOGIN_MODAL, REGISTER_MODAL } from "../constants/modals";
import { openModal, closeModal } from "../store/actions/modal";
import { getLoginRequest } from "../store/actions/login";

const Login = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state);
  const [error, setError] = useState("");
  const { meta } = login;
  if (meta.status && meta.status === "error") {
    setError(meta.message);
    setTimeout(() => {
      setError("");
    }, 3000);
  }
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(getLoginRequest(values));
    },
  });

  return (
    <>
      <Typography variant="h5">Login</Typography>
      <XYAxisSpace isXAxis={false} />
      {error !== "" ? <div style={{ color: red }}>{error}</div> : ""}
      <TextInput
        value={formik.values.email}
        onChange={formik.handleChange}
        fullWidth
        name="userName"
        label="User Name"
        autoFocus
      />
      <TextInput
        fullWidth
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <XYAxisSpace isXAxis={false} />
      <Box style={{ display: "flex" }}>
        <Button variant="outlined" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </Box>
      <Typography variant="h6" style={{ margin: "10px 20px" }}>
        OR
      </Typography>
      <Box>
        <Button
          variant="outlined"
          style={{ flex: 1 }}
          onClick={() => {
            dispatch(closeModal({ id: LOGIN_MODAL }));
            dispatch(openModal({ id: REGISTER_MODAL }));
          }}
        >
          Register
        </Button>
        <Typography variant="caption" style={{ margin: "0px 5px" }}>
          for new User
        </Typography>
      </Box>
    </>
  );
};

export default Login;
