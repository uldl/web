import React, { useEffect } from "react";
import "./styles.css";
import Title from "./Title";
import { BrowserView, MobileView } from "react-device-detect";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/app">
            <HomeApp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
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
        <Title />
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SignUp() {
  let url = useQuery();
  async function checkError() {
    if (url.get("error") !== null) {
      console.log(url.get("error"));
    }
  }
  useEffect(() => {
    checkError();
  });
  return (
    <div className="SignUp">
      <div className="toHome">
        <Link to="/" id="linktext">
          <img
            src="https://img.icons8.com/250/e0e0e0/back"
            id="small-img"
            alt="back"
          />
        </Link>
      </div>
      <div className="centered">
        <div className="textCentered">
          <span id="title-signup">sign up</span>
          <br />
          <span>{url.get("error")}</span>
        </div>
        <br />
        <br />
        <div className="textCentered">
          <form action="https://server.uldl.me/signup" method="post">
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
              suggested="current-password"
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
  let url = useQuery();
  async function checkError() {
    if (url.get("error") !== null) {
      console.log(url.get("error"));
    }
  }
  useEffect(() => {
    checkError();
  });
  return (
    <div className="SignIn">
      <div className="toHome">
        <Link to="/" id="linktext">
          <img
            src="https://img.icons8.com/250/e0e0e0/back"
            id="small-img"
            alt="back"
          />
        </Link>
      </div>
      <div className="centered">
        <div className="textCentered">
          <span id="title-signup">sign in</span>
          <br />
          <span>{url.get("error")}</span>
        </div>
        <br />
        <br />
        <div className="textCentered">
          <form action="https://server.uldl.me/signin" method="post">
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

function HomeApp() {
  let url = useQuery();
  async function checkError() {
    if (url.get("username") !== null) {
      console.log(url.get("username"));
    }
  }
  useEffect(() => {
    checkError();
  });

  return (
    <div className="HomeApp">
      <div className="textCentered">
        <BrowserView>
          <div className="sidebar">
            <Link to="/">
              <span className="title-home">uldl</span>
            </Link>
            <br />
            <div id="username-home">{url.get("username")}</div>
          </div>
          <div id="textarea-wrapper">
            <span id="message-send">
              <input
                type="textarea"
                id="messagebarinput-home"
                placeholder="uplink"
              ></input>
            </span>
          </div>
          <button
            id="send-button"
            onClick={(e) => {
              console.log("sent");
            }}
          >
            <img
              src="https://raw.githubusercontent.com/uldl/ui/main/uldltwotone.png"
              alt="send"
              id="send-button-img"
              width="35"
            />
          </button>
          <div className="messagebar"></div>
        </BrowserView>
        <MobileView>
          <div className="sidebar-mobile">
            <Link to="/">
              <span className="title-home-mobile">uldl</span>
            </Link>
            <br />
            <div id="username-home">{url.get("username")}</div>
          </div>
          <div id="textarea-wrapper-mobile">
            <span id="message-send">
              <input
                type="textarea"
                id="messagebarinput-home"
                placeholder="uplink"
              ></input>
            </span>
          </div>
          <button
            id="send-button"
            onClick={(e) => {
              console.log("sent");
            }}
          >
            <img
              src="https://raw.githubusercontent.com/uldl/ui/main/uldltwotone.png"
              alt="send"
              id="send-button-img"
              width="35"
            />
          </button>
          <div className="messagebar-mobile"></div>
        </MobileView>
        <br />
      </div>
    </div>
  );
}
