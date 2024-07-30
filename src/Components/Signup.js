import React, { Component, createRef } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { Link, Navigate, redirect } from "react-router-dom";
import '../Styles/AuthForm.css'
import Swal from "sweetalert2";

class Signup extends Component {
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
      await createUserWithEmailAndPassword(
        auth,
        this.email.current.value,
        this.password.current.value
      ).then((value) => console.log(value)) ;
     
      Swal.fire({
        title: "Signup Successful!",
        text: "You are heading towards Login page!",
        icon: "success"
      }).then(() => {
        this.setState({ redirect: true });
      }, 1000);
     
    } catch {
      Swal.fire({
        title: "Registration Failed!",
        icon: "error"
      })
      this.setState({ error: "Sorry, Account creation process failed." });
    }
  };

  render() {
    const { error, redirect } = this.state;

    if (redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className="auth-form">
        <h2>Sign Up</h2>
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
            <button className="s-l-btn" type="submit">Sign Up</button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="linkTag" to="/login">
            Log In
          </Link>
        </p>
      </div>
    );
  }
}

export default Signup;