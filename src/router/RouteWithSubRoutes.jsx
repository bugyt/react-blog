import React, { Component } from "react";
import { Route } from "react-router-dom";

class RouteWithSubRoutes extends Component {
  render() {
    
    if (this.props.exact) {
    return (
      <Route
        exact path={this.props.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <this.props.component {...props} routes={this.props.routes} />
        )}
      />
    );
    } else {
          return (
      <Route
        path={this.props.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <this.props.component {...props} routes={this.props.routes} />
        )}
      />
    );
    }

  }
}

export default RouteWithSubRoutes;