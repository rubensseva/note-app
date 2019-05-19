import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""}

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleUserCredentialsSubmit = this.handleUserCredentialsSubmit.bind(this)
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  } 
  handleUserCredentialsSubmit() {
    console.log("submitting")
    this.props.LoginUserWithCredentials(this.state.username, this.state.password)
  }

  render() {
    const { classes } = this.props;
    console.log("state")
    console.log(this.state)
    console.log("props")
    console.log(this.props)
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          <Grid item style={{ padding: "50px" }}>
            <Typography variant="h4">Log in with your username here</Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Username"
              type="username"
              hinttext="Enter your username here"
              floatinglabeltext="Username"
              onChange={this.handleUsernameChange}
            />
          </Grid>
          <br />
          <Grid item>
            <TextField
              label="Password"
              type="password"
              hinttext="Enter your Password"
              floatinglabeltext="Password"
              onChange={this.handlePasswordChange}
            />
          </Grid>
          <Grid item style={{ margin: "50px" }}>
            <Button variant="contained" color="primary" onClick={this.handleUserCredentialsSubmit}>
              Log in
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
