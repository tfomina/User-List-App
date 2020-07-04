import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersRequest } from "actions/users";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return <div>User List App</div>;
};
