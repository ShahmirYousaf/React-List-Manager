import React, { Component, createRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { Link, Navigate } from "react-router-dom";
import "../Styles/AuthForm.css";
import Swal from "sweetalert2";

class Login extends Component {
  constructor(props) {
    super(props);
    this.email = createRef();
    this.password = createRef();
    this.state = {
      error: "",
      redirect: false,
    };
  }

  handleSubmitButton = async (e) => {
    e.preventDefault();
    try {
      this.setState({ error: "" });
      console.log("Hello")
      await signInWithEmailAndPassword(
        auth,
        this.email.current.value,
        this.password.current.value
      ).then((value) => console.log(value));
      Swal.fire({
        title: "Login Successful!",
        text: "You are heading towards List page!",
        icon: "success"
      }).then(() => {
        this.setState({ redirect: true });
      }, 1000);
    } catch {
      Swal.fire({
        title: "Login Failed!",
        text: "Sorry, Login Failed",
        icon: "error"
      })
      this.setState({ error: "Sorry, Login failed." });
    }
  };

  render() {
    const { error, redirect } = this.state;

    if (redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className="auth-form">
        <h2>Log In</h2>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmitButton}>
          <input
            type="email"
            ref={this.email}
            required
            placeholder="Email"
          />
          <input
            type="password"
            ref={this.password}
            required
            placeholder="Password"
          />
          <div className="s-l-btn-container">
            <button className="s-l-btn" type="submit">Login</button>
          </div>
        </form>
        <p>
          Need an account? <Link className='linkTag' to="/signup">Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default Login;