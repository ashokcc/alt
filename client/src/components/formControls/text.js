import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const textInputColor = "#0170fe";

const Input = withStyles({
  root: {
    margin: "5px 0",
    "& label.Mui-focused": {
      color: textInputColor,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: textInputColor,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: textInputColor,
      },
      "&:hover fieldset": {
        borderColor: textInputColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: textInputColor,
      },
    },
  },
})(TextField);

const TextInput = ({
  label,
  name,
  type = "text",
  value,
  fullWidth,
  onChange,
  variant = "standard",
  autoFocus = false,
}) => {
  return (
    <Input
      label={label}
      onChange={onChange}
      id={name}
      name={name}
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      autoFocus={autoFocus}
    />
  );
};
export default TextInput;
