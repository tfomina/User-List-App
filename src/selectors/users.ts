import { useTypedSelector } from "src/useTypedSelector";

export const usersSelector = () =>
  useTypedSelector((state) => state.users.items);

export const errorSelector = () =>
  useTypedSelector((state) => state.users.error);
