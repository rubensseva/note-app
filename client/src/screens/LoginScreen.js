import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { LoginUserWithCredentials, LoginUserWithCookie } from "../actions/userActions";
import LoginForm from "../components/LoginForm";

export class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.renderRedirect = this.renderRedirect.bind(this)
  }

  componentDidMount() {
    this.props.LoginUserWithCookie() 
  }

  renderRedirect() {
    if(this.props.user.name) {
      return <Redirect to="/topics"/>
    }
  }
  render() {
    return (
      <Grid container direction="column">
        <LoginForm LoginUserWithCredentials={this.props.LoginUserWithCredentials} />
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
