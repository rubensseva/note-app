import axios from "axios";

export const LoginUserWithCookie = () => dispatch => {
  axios
    .get("/api/user/cookieLogin", {})
    .then(function(response) {
      console.log(response);
      if (response.data.msg == "success") {
        dispatch({
          type: "LOGIN_USER",
          payload: {
            name: response.data.name
          }
        });
      } else {
        console.log("cookie login did not succeed");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const LoginUserWithCredentials = (_name, _password) => dispatch => {
  console.log("in login with credentials");
  console.log("name " + _name);
  console.log("password " + _password);
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
          name: _name
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};
