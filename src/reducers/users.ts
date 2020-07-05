import { User } from "types/users";
import { GET_USERS_SUCCESS, CREATE_USER_REQUEST } from "constants/users";

type UsersState = {
  items: User[];
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

type Action = GetUsersSuccessAction;

const INITIAL_STATE = {
  items: [],
};

export const usersReducer = (
  state: UsersState = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        items: (action as GetUsersSuccessAction).payload.items,
      };
    }
    default: {
      return state;
    }
  }
};
