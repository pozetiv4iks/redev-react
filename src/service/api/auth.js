import axios from "axios";
import { REDEV_URL } from "../constans";

export const instance = axios.create({
  baseURL: `${REDEV_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userAuth = async (email, password) => {
  const response = await instance.post(`/auth/login`, { email, password });
  return response.data;
};

export const userReg = async (username, email, password, gender, age) => {
  const response = await instance.post(`/users/register`, {
    username,
    email,
    password,
    gender,
    age,
  });
  return response.data;
};
