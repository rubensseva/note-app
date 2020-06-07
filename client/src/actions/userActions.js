import axios from "axios";

export const LoginUserWithCredentials = (_name, _password) => dispatch => {
  console.log("login");
  axios
    .post("/api/user/loginUser", {
      name: _name,
      password: _password
    })
    .then(response => {
      console.log(response);
      dispatch({
        type: "LOGIN_USER",
        payload: {
          user: response.data
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const Logout = () => dispatch => {
  console.log("logout");
  dispatch({
    type: "LOGOUT_USER",
    payload: {
      user: {}
    }
  });
};

export const CreateUser = (_name, _password) => dispatch => {
  axios
    .post("/api/user/create", {
      username: _name,
      password: _password
    })
    .then(response => {
      console.log(response);
      dispatch({
        type: "CREATE_USER",
        payload: {
          user: response.data
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};
