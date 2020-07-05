import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { User } from "types/users";

type Props = {
  users: User[];
  onDeleteUser: (userId: number) => void;
};

export const UserList: React.FC<Props> = (props) => {
  const { users, onDeleteUser } = props;

  return (
    <ListGroup>
      {users
        .sort((a: User, b: User) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((user) => (
          <ListGroupItem key={user.id}>
            <section className="d-flex align-items-center">
              <div className="flex-grow-1">
                {`${user.firstName} ${user.lastName}`}
              </div>
              <div>
                <Button
                  outline
                  color="danger"
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};
