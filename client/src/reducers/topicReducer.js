const initialState = {
  topics: [],
  activeTopicId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TOPIC":
      return {
        ...state,
      }
    case "GET_TOPICS":
      console.log("in get topics reducer case")
      console.log(action)
      return {
        ...state,
        topics: action.payload
      };
    case "SET_ACTIVE_TOPIC":
      console.log("in set active topic reducer case")
      console.log(action.payload)
      return {
        ...state,
        activeTopicId: action.payload
      };
    default:
      return state;
  }
}