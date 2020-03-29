import * as React from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Input } from "reactstrap";

const Userpage = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [input, setInput] = React.useState<string>("");
  const dispatch = useDispatch();
  const handleEnter = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setMessages([...messages, input]);
      setInput("");
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  });
  return (
    <div>
      {messages.map(message => {
        return <div>{message}</div>;
      })}
      <Form>
        <FormGroup>
          <Input
            type="textarea"
            name="message"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
            }}
            value={input}
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default Userpage;
