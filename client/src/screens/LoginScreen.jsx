import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import {
  LoginUserWithCredentials,
  LoginUserWithCookie
} from "../actions/userActions";
import LoginForm from "../components/LoginForm";

export class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.renderRedirect = this.renderRedirect.bind(this);
  }

  componentDidMount() {
    const { LoginUserWithCookie } = this.props;
    LoginUserWithCookie();
  }

  renderRedirect() {
    const { user } = this.props;
    console.log(user);
    if (user && user.user && user.user.username) {
      return <Redirect to="/topics" />;
    }
  }
  render() {
    const { LoginUserWithCredentials } = this.props;
    return (
      <Grid container direction="column">
        <LoginForm LoginUserWithCredentials={LoginUserWithCredentials} />
        {this.renderRedirect()}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  { LoginUserWithCredentials, LoginUserWithCookie }
)(LoginScreen);
