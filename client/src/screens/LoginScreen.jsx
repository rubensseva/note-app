import React, { useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import { LoginUserWithCredentials, CreateUser } from "../actions/userActions";
import LoginForm from "../components/LoginForm";
import CreateUserButton from "../components/CreateUserButton";

const LoginScreen = props => {
  const [open, setOpen] = React.useState(false);

  const {
    LoginUserWithCredentials,
    CreateUser,
    user: { user }
  } = props;

  useEffect(() => {
    const {
      user: { user }
    } = props;
    setOpen(user && user._id);
  }, [user]);

  return (
    <Grid container direction="column">
      <Dialog open={open}>
        <DialogTitle id="simple-dialog-title">
          You are logged in as {user ? user.username : "no name found"}
        </DialogTitle>
      </Dialog>

      <LoginForm LoginUserWithCredentials={LoginUserWithCredentials} />
      <CreateUserButton CreateUser={CreateUser} />
    </Grid>
  );
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, {
  LoginUserWithCredentials,
  CreateUser
})(LoginScreen);
