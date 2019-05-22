const initialState = {
  topics: [],
  activeTopicId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_TOPICS":
      return {
        ...state,
        topics: action.payload
      };
    case "SET_ACTIVE_TOPIC":
      return {
        ...state,
        activeTopicId: action.payload
      };
    default:
      return state;
  }
}
