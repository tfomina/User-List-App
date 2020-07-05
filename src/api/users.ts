import { axiosInstance } from "./axiosInstance";

export const getUsers = () => {
  return axiosInstance.get("/users", {
    params: {
      limit: 1000,
    },
  });
};

export const createUser = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return axiosInstance.post("/users", {
    firstName,
    lastName,
  });
};
