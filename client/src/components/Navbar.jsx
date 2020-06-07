import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Logout } from "../actions/userActions";

const Navbar = props => {
  const history = useHistory();

  const createButtonLink = (name, url) => (
    <Button
      onClick={() => history.push(url)}
      color="inherit"
      variant="outlined"
      style={{ margin: "20px" }}
    >
      {name}
    </Button>
  );

  const LogoutWrapper = () => {
    const { Logout } = props;
    Logout();
    history.push("/");
  };
  const {
    user: { user }
  } = props;
  return (
    <AppBar position="static" style={{ zIndex: 9999 }}>
      <Toolbar>
        {user && user._id ? createButtonLink("Topics", "/topics") : null}
        {user && user._id ? createButtonLink("Cards", "/cards") : null}
        {user && user._id ? (
          <Button
            onClick={LogoutWrapper}
            color="inherit"
            variant="outlined"
            style={{ marginLeft: "auto", marginRight: "-12" }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => history.push("/")}
            color="inherit"
            variant="outlined"
            style={{ marginLeft: "auto", marginRight: "-12" }}
            align="right"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { Logout })(Navbar);
