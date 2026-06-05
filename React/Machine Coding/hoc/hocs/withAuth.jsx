import React from "react";

function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
      return <h2>Please login first</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;