import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Lander />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Lander() {
  return (
    <div className="centered">
      <div className="textCentered">
        <span id="title">uldl</span>
      </div>
      <div className="textCentered">
        <span id="link">
          <Link to="/signup" id="linktext">
            sign up
          </Link>
        </span>
        <span id="link"> / </span>
        <span id="link">
          <Link to="/signin" id="linktext">
            sign in
          </Link>
        </span>
      </div>
    </div>
  );
}

function SignUp() {
  return (
    <div className="SignUp">
      <div className="toHome">
        <Link to="/" id="linktext">
          <img src="https://img.icons8.com/250/e0e0e0/back" id="small-img" />
        </Link>
      </div>
      <div className="centered">
        <div className="textCentered">
          <span id="title-signup">sign up</span>
        </div>
        <br />
        <br />
        <div className="textCentered">
          <form action="https://server.uplinkdownlink.com/signup" method="post">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
            />
            <br />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
            <br />
            <br />
            <div className="textCentered">
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function SignIn() {
  return (
    <div className="SignIn">
      <div className="toHome">
        <Link to="/" id="linktext">
          <img src="https://img.icons8.com/250/e0e0e0/back" id="small-img" />
        </Link>
      </div>
      <div className="centered">
        <div className="textCentered">
          <span id="title-signup">sign in</span>
        </div>
        <br />
        <br />
        <div className="textCentered">
          <form action="https://server.uplinkdownlink.com/signin" method="post">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
            />
            <br />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
            <br />
            <br />
            <div className="textCentered">
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
