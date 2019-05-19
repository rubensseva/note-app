const initialState = {
    user: {
        name: "",
      }
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "LOGIN_USER":
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  }
  