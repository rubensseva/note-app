const initialState = {
  cards: [
    {
      name: "defaultname",
      question: "default question",
      answer: "default answer"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    case "GET_ACTIVE_TOPIC_CARDS":
      console.log("in get cards")
      console.log(action.payload)
      return {
        ...state,
        cards: action.payload
      }

    default:
      return state;
  }

}
