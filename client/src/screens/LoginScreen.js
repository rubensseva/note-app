import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { LoginUserWithCredentials } from "../actions/userActions";
import LoginForm from "../components/LoginForm";

export class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.renderRedirect = this.renderRedirect.bind(this)
  }

  renderRedirect() {
    console.log("render")

    if(this.props.user.name) {
      return <Redirect to="/topics"/>
    }
  }
  render() {
    console.log("login screens props")
    console.log(this.props)
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
  { LoginUserWithCredentials }
)(LoginScreen);
