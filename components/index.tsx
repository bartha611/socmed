import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  RouteComponentProps
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./Navigation/navigation";
import Userpage from "./Userpage/userpage";
const Login = React.lazy(() =>
  import(/*webpackChunkName: "Login" */ "./Login/Login")
);

interface Props extends RouteComponentProps<{}> {}

const LoadingComponent = (Component: React.SFC<Props>) => {
  return props => (
    <React.Suspense fallback={<div>...Loading</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/navigation">
          <Navigation />
        </Route>
        <Route path="/login">{LoadingComponent(Login)}</Route>
        <Route path="/userpage">
          <Userpage />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
