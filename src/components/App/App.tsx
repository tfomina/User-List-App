import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersRequest } from "actions/users";
import { List } from "components/List";
import { useTypedSelector } from "src/useTypedSelector";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const users = useTypedSelector((state) => state.users.items);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <h1>User List</h1>
      <List users={users} />
    </div>
  );
};
