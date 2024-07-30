import React, { createContext, Component } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";
import Swal from 'sweetalert2';

const AuthContext = createContext();

class AuthProvider extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#306cbf',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth);
        Swal.fire(
          'Logged Out!',
          'You have been logged out.',
          'success'
        );
      }
    });
  };

  render() {
    const currentUser  = this.state;
    const {logout} = this;
    const val  = {currentUser, logout}; 

    return (
        <AuthContext.Provider value = {val} >
            {this.props.children}
        </AuthContext.Provider>
    )
  }

}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer , AuthContext};
