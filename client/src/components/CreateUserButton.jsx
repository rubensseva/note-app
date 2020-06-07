import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      dialogUsername: "",
      dialogPassword: ""
    };

    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleDialogSubmit = this.handleDialogSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleDialogOpen() {
    this.setState({ dialogOpen: true });
    console.log("dialog open");
  }

  handleDialogSubmit() {
    const { CreateUser } = this.props;
    const { dialogUsername, dialogPassword } = this.state;
    CreateUser(dialogUsername, dialogPassword);
    this.setState({
      dialogOpen: false,
      dialogUsername: "",
      dialogPassword: ""
    });
  }

  handleUsernameChange(e) {
    this.setState({ dialogUsername: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ dialogPassword: e.target.value });
  }
  handleDialogClose() {
    this.setState({ dialogOpen: false });
  }

  render() {
    const { dialogOpen, dialogUsername, dialogPassword } = this.state;
    return (
      <Grid container justify="center">
        <Dialog open={dialogOpen} onClose={this.handleDialogClose}>
          <DialogContent>
            {" "}
            <DialogTitle>Add a new user</DialogTitle>
            <DialogContentText>Create a new user here</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="text"
              fullWidth
              value={dialogUsername}
              onChange={this.handleUsernameChange}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="text"
              fullWidth
              multiline
              value={dialogPassword}
              onChange={this.handlePasswordChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogSubmit}>submit</Button>
          </DialogActions>
        </Dialog>
        <Button
          onClick={this.handleDialogOpen}
          color="inherit"
          variant="outlined"
          style={{ margin: "20px" }}
        >
          Create new user
        </Button>
      </Grid>
    );
  }
}

export default CreateUser;
