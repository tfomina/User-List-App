import { axiosInstance } from "./axiosInstance";

export const getUsers = () => {
  return axiosInstance.get("/users", {
    params: {
      limit: 1000,
    },
  });
};
