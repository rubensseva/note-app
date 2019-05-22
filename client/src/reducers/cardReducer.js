const initialState = {
  cards: [
    {
      name: "Loading",
      question: "This card should not stay here for to long",
      answer: "Some answer"
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
      return {
        ...state,
        cards: action.payload
      };

    default:
      return state;
  }
}
