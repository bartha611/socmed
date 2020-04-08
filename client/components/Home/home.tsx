import * as React from "react";
import { RouteComponentProps } from "react-router";

const Home = ({ history }: RouteComponentProps<{}>) => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default Home;
