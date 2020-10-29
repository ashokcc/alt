import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import { useFormik } from "formik";
import XYAxisSpace from "../components/xyAxisSpace";
import TextInput from "../components/formControls/text";
import SelectComponent from "../components/formControls/select";
import { LOGIN_MODAL, REGISTER_MODAL } from "../constants/modals";
import { openModal, closeModal } from "../store/actions/modal";
import { registerUserRequest } from "../store/actions/register";
import { countries } from "../data/countries";
const Register = () => {
  const dispatch = useDispatch();
  const { register } = useSelector((state) => state);

  const [error, setError] = useState("");
  const { meta } = register;
  if (meta.status && meta.status === "error") {
    setError(meta.message);
    setTimeout(() => {
      setError("");
    }, 3000);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "male",
      country: "",
    },
    onSubmit: (values) => {
      dispatch(registerUserRequest(values));
    },
  });
  return (
    <Box style={{ width: 500 }}>
      <Typography variant="h5">Register</Typography>
      <XYAxisSpace isXAxis={false} />
      {error !== "" ? <div style={{ color: red }}>{error}</div> : ""}

      <XYAxisSpace isXAxis={false} />
      <Box style={{ display: "flex", flexGrow: 1 }}>
        <TextInput
          fullWidth
          name="firstName"
          onChange={formik.handleChange}
          label="First Name"
          autoFocus
        />
        <XYAxisSpace />
        <TextInput
          fullWidth
          name="lastName"
          onChange={formik.handleChange}
          label="Last Name"
        />
      </Box>
      <TextInput
        fullWidth
        name="email"
        onChange={formik.handleChange}
        label="Email"
      />
      <Box style={{ display: "flex" }}>
        <TextInput
          fullWidth
          type="password"
          onChange={formik.handleChange}
          name="password"
          label="Password"
        />
        <XYAxisSpace />
        <SelectComponent
          fullWidth
          name="country"
          value={formik.values.country}
          handleChange={(e) => formik.setFieldValue("country", e.target.value)}
          labelId="country-select"
          label="Country"
          options={countries}
        />
      </Box>
      <Box style={{ marginTop: 15 }}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={formik.values.role}
          onChange={(e) => {
            formik.setFieldValue("gender", e.currentTarget.value);
          }}
          style={{ flexDirection: "row" }}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </Box>
      <XYAxisSpace isXAxis={false} />
      <Box style={{ display: "flex" }}>
        <Button variant="outlined" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </Box>
      <Typography variant="h6" style={{ margin: "10px 21px" }}>
        OR
      </Typography>
      <Box>
        <Button
          variant="outlined"
          style={{ flex: 1 }}
          onClick={() => {
            dispatch(closeModal({ id: REGISTER_MODAL }));
            dispatch(openModal({ id: LOGIN_MODAL }));
          }}
        >
          Login
        </Button>
        <Typography variant="caption" style={{ margin: "0px 5px" }}>
          for existing User
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
