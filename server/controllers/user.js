import User from "../models/user";
import { getToken } from "../utils/token";

export const register = (req, res, next) => {
  const { firstName, lastName, email, country, password, gender } = req.body;

  if (email !== "" && password !== "") {
    res.json({
      status: "success",
      token: getToken({ email }),
      message: "Successfully created account.",
      data: { email, name: `${firstName} ${lastName}` },
    });
  } else {
    res.status(500).send({
      status: "error",
      message: "Error while creating profile.",
      data: { email: "" },
    });
  }
};

export const login = (req, res, next) => {
  const { userName, password } = req.body;
  if (userName !== "" && password !== "") {
    res.json({
      status: "success",
      token: getToken({ userName }),
      message: "Successfully created account.",
      data: { email: userName },
    });
  } else {
    res.status(500).send({
      status: "error",
      message: "Error with username or password",
      data: { email: "" },
    });
  }
};
