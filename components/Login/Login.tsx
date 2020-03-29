import * as React from "react";
import {
  InputGroupAddon,
  InputGroupText,
  Form,
  InputGroup,
  Input,
  Button,
  Container
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

const Login = () => {
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const handleSubmit = (): void => {
    // TODO
    console.log(username);
    console.log(email);
  };
  return (
    <Container id="login-form" className="mt-5">
      <Form className="pt-4">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FontAwesomeIcon icon={faUser} />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setUsername(e.target.value);
            }}
          />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FontAwesomeIcon icon={faKey} />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setEmail(e.target.value);
            }}
          />
        </InputGroup>
        <br />
        <Button onClick={() => handleSubmit()}>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
