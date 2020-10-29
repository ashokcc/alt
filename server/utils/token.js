import jwt from "jsonwebtoken";

const setToken = (user) => {
  const token = getToken(user.email);
};

const getToken = (obj) => {
  return jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
  });
};

const verifyToken = (user) => {};

module.exports = {
  setToken,
  getToken,
  verifyToken,
};
