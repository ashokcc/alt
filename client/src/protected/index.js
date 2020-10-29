import React from "react";
import { Route, Redirect } from "react-router-dom";
import Storage from "../services/storage";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Storage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: props.location,
              }}
            />
          );
        }
      }}
    />
  );
};
