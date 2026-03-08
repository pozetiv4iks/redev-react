import axios from "axios";
import { REDEV_URL } from "../constans";

export const instance = axios.create({
  baseURL: `${REDEV_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userAuth = async (login, password) => {
  try {
    const requestData = {
      email: login,
      password: password,
    };
    const response = instance.post(`/auth/login`, requestData);
    return response.data;
  } catch (error) {
    console.error(`Auth`, error);
  }
};

export const userReg = async (username, login, password, gender, age) => {
  try {
    const requestData = {
      username: username,
      email: login,
      password: password,
      gender: gender,
      age: age,
    };
    const response = instance.post(`/users/register`, requestData);
    return response.data;
  } catch (error) {
    console.error(`Reg`, error);
  }
};
