import { User } from "types/users";
import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  CREATE_USER_REQUEST,
} from "constants/users";

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (payload: { items: User[] }) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const createUserRequest = (payload: {
  firstName: string;
  lastName: string;
}) => ({
  type: CREATE_USER_REQUEST,
  payload,
});
