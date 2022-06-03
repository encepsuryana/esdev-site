import React, { Component } from "react";
import "./Register.scss";

import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../../../components/atoms/Button";
import { connect } from "react-redux";
import { registerUserAPI } from "../../../config/redux/action";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    // console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    console.log("data sebelum dikirim: ", email, password);
    this.props.registerAPI({ email, password });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register</p>
          <input
            className="input"
            id="email"
            onChange={this.handleChangeText}
            type="text"
            placeholder="Email"
          />
          <input
            className="input"
            id="password"
            onChange={this.handleChangeText}
            type="password"
            placeholder="Password"
          />

          <Button
            title="Register"
            onClick={this.handleRegisterSubmit}
            loading={this.props.isLoading}
          />
        </div>
        {/* <button>Go to Dashboard</button> */}
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Register);
