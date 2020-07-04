import React, { useState } from "react";
import { Form as LibForm, FormGroup, Label, Input, Button } from "reactstrap";

type Props = {
  onSubmit: (firstName: string, lastName: string) => void;
};

export const Form: React.FC<Props> = (props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const { onSubmit } = props;

  const handleFirstNameChange = (e: React.FormEvent<HTMLInputElement>) =>
    setFirstName(e.currentTarget.value);

  const handleLastNameChange = (e: React.FormEvent<HTMLInputElement>) =>
    setLastName(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(firstName, lastName);

    setFirstName("");
    setLastName("");
  };

  return (
    <LibForm onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Last Name</Label>
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </LibForm>
  );
};
