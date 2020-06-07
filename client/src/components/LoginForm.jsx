import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    placeItems: "center"
  },
  formElement: {
    marginTop: "30px"
  }
};

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleUserCredentialsSubmit = this.handleUserCredentialsSubmit.bind(
      this
    );
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleUserCredentialsSubmit();
    }
  }
  handleUserCredentialsSubmit() {
    const { LoginUserWithCredentials } = this.props;
    const { username, password } = this.state;
    LoginUserWithCredentials(username, password);
  }

  render() {
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          <form
            style={styles.form}
            preventDefault="true"
            onSubmit={this.handleUserCredentialsSubmit}
          >
            <Typography style={styles.formElement} variant="h4">
              Log in with your username here
            </Typography>
            <TextField
              style={styles.formElement}
              label="Username"
              type="username"
              hinttext="Enter your username here"
              floatinglabeltext="Username"
              onChange={this.handleUsernameChange}
            />
            <TextField
              style={styles.formElement}
              label="Password"
              type="password"
              hinttext="Enter your Password"
              floatinglabeltext="Password"
              onChange={this.handlePasswordChange}
            />
            <Button
              style={styles.formElement}
              variant="contained"
              color="primary"
              type="submit"
            >
              Log in
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
