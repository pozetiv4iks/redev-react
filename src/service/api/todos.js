import axios from "axios";
import { REDEV_URL } from "../constans";

const instance = axios.create({
  baseURL: REDEV_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const getAuth = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const getTasks = async () => {
  const { data } = await instance.get("/todos", getAuth());
  return data;
};

export const createTask = async (title) => {
  const { data } = await instance.post("/todos", { title }, getAuth());
  return data;
};

export const editTask = async (id, title) => {
  const { data } = await instance.patch(`/todos/${id}`, { title }, getAuth());
  return data;
};

export const toggleTask = async (task) => {
  const { data } = await instance.patch(
    `/todos/${task.id}/isCompleted`,
    { ...task, isCompleted: !task.isCompleted },
    getAuth(),
  );
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await instance.delete(`/todos/${id}`, getAuth());
  return data;
};
