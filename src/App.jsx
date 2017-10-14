import React, { Component } from "react";
import { Route } from "react-router-dom";
// import logo from "./logo.svg";
import Footer from "./Footer";
import Header from "./Header";
import routes from "./router/routes.jsx";
import RouteWithSubRoutes from './router/RouteWithSubRoutes'


class App extends Component {
  render() {
    console.log(routes);
    return (
      
        <div>
          
          <Route path="/" component={Header} />
          <div className="container">

            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route path="/" component={Footer} />
          </div>
          
        </div>
      
    );
  }
}
/*
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
*/
// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
