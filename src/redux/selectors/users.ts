import { CombinedState } from "redux";
import { UsersState } from "reducers/users";

export const users = (state: CombinedState<{ users: UsersState }>) =>
  state.users;
export const items = (state: CombinedState<{ users: UsersState }>) =>
  users(state).items;
export const error = (state: CombinedState<{ users: UsersState }>) =>
  users(state).error;
