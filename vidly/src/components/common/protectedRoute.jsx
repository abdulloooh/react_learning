import React from "react";
import { Route } from "react-router-dom";
import authService from "../../services/authService";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      render={(props) => {
        return authService.getCurrentUser() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: props.location,
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
