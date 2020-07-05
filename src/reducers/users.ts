import { User } from "types/users";
import {
  GET_USERS_SUCCESS,
  CREATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  HANDLE_ERROR,
} from "constants/users";

type UsersState = {
  items: User[];
  error: string;
};

type GetUsersSuccessAction = {
  type: typeof GET_USERS_SUCCESS;
  payload: { items: User[] };
};

export type CreateUserRequestAction = {
  type: typeof CREATE_USER_REQUEST;
  payload: {
    firstName: string;
    lastName: string;
  };
};

export type DeleteUserRequestAction = {
  type: typeof DELETE_USER_REQUEST;
  payload: {
    userId: string;
  };
};

type HandleErrorAction = {
  type: typeof HANDLE_ERROR;
  payload: {
    error: string;
  };
};

type Action = GetUsersSuccessAction | HandleErrorAction;

const INITIAL_STATE = {
  items: [],
  error: "",
};

export const usersReducer = (
  state: UsersState = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        items: (action as GetUsersSuccessAction).payload.items,
        error: "",
      };
    }
    case HANDLE_ERROR: {
      return {
        ...state,
        error: (action as HandleErrorAction).payload.error,
      };
    }
    default: {
      return state;
    }
  }
};
