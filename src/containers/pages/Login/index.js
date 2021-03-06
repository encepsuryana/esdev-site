import React, { Component } from "react";
import { connect } from "react-redux";
import { actionUserName } from "../../../config/redux/action";

class Login extends Component {
  changeUser = () => {
    this.props.changeUserName();
  };

  render() {
    return (
      <div>
        <p>Login Page {this.props.propsUser}</p>
        <button onClick={this.changeUser}>Change Username</button>
        <button>Go to Dashboard</button>
      </div>
    );
  }
}

const reduxState = (state) => ({
  propsPupup: state.popup,
  propsUser: state.user,
});

const reduxDispatch = (dispatch) => ({
  changeUserName: () => dispatch(actionUserName()),
});

export default connect(reduxState, reduxDispatch)(Login);
