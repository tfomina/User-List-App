import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersRequest } from "actions/users";
import { List } from "components/List";
import { useTypedSelector } from "src/useTypedSelector";
import { Form } from "components/Form";

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
      <Form onSubmit={handleSubmit} />
      <List users={users} />
    </div>
  );
};
