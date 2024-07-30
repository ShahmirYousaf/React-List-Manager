import React from "react";
import { Navigate } from "react-router-dom";
import { AuthConsumer } from "../Contexts/Authcontext";

class PrivateRoute extends React.Component {
  render() {
    return (
        <AuthConsumer>
        {({ currentUser }) => {
          // Debugging statement
          

          // If currentUser is defined and not null, render the children components
          if (currentUser.currentUser) {
            return this.props.children;
          } else {
            // Otherwise, redirect to the login page
            return <Navigate to="/login" />;
          }
        }}
      </AuthConsumer>
    );
  }
}

export default PrivateRoute;
