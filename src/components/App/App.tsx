import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  handleError,
} from "actions/users";
import { useTypedSelector } from "src/useTypedSelector";
import { UserList } from "components/UserList";
import { AddUserForm } from "components/AddUserForm";
import { Error } from "components/Error";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const users = useTypedSelector((state) => state.users.items);
  const error = useTypedSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  const handleSubmit = (firstName: string, lastName: string) => {
    dispatch(createUserRequest({ firstName, lastName }));
  };

  const handleDeleteUserClick = (userId: number) => {
    dispatch(deleteUserRequest({ userId }));
  };

  const handleCloseError = () => {
    dispatch(handleError({ error: "" }));
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <h1>User List</h1>
      <Error message={error} isOpen={!!error} onDismiss={handleCloseError} />
      <AddUserForm onSubmit={handleSubmit} />
      <UserList users={users} onDeleteUser={handleDeleteUserClick} />
    </div>
  );
};
