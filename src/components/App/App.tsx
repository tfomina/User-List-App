import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersRequest } from "actions/users";
import { useTypedSelector } from "src/useTypedSelector";
import { UserList } from "components/UserList";
import { AddUserForm } from "components/AddUserForm";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const users = useTypedSelector((state) => state.users.items);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  const handleSubmit = (firstName: string, lastName: string) => {
    console.log("firstName ", firstName);
    console.log("lastName ", lastName);
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <h1>User List</h1>
      <AddUserForm onSubmit={handleSubmit} />
      <UserList users={users} />
    </div>
  );
};
