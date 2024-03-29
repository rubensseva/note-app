const initialState = {
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        ...action.payload
      };
    case "LOGOUT_USER":
      return {};
    case "CREATE_USER":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
