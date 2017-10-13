import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import Footer from "./Footer";
import Home from "./Home";
import Header from "./Header";
import Signin from "./Signin";
import Signup from "./Signup";



import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
