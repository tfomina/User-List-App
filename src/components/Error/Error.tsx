import React from "react";
import { Alert } from "reactstrap";

type Props = {
  message: string;
  isOpen: boolean;
  onDismiss: () => void;
};

export const Error: React.FC<Props> = (props) => {
  const { message, isOpen, onDismiss } = props;
  return (
    <Alert color="danger" isOpen={isOpen} toggle={onDismiss}>
      {message}
    </Alert>
  );
};
