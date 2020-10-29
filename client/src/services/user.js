import { BASE_URL } from "../constants/config";
import axios from "axios";

export const loginUser = (data) => axios.post(`${BASE_URL}/login`, { ...data });
export const registerUser = (data) =>
  axios.post(`${BASE_URL}/register`, { ...data });
