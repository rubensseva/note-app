import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
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
              hintText="Enter your username here"
              floatingLabelText="Username"
              style={{ backgroundColor: "#fff" }}
            />
          </Grid>
          <br />
          <Grid item>
            <TextField
              label="Password"
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
            />
          </Grid>
          <Grid item style={{ margin: "50px" }}>
            <Button variant="contained" color="primary">
              Log in
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
