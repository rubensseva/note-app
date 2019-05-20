const initialState = {
        name: "",
  };
  
  export default function(state = initialState, action) {
    console.log(action)
    console.log(action.payload)
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
  