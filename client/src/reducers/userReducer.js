const initialState = {
        name: "",
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "LOGIN_USER":
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  }
  