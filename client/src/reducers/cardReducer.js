
const initialState = {
  cards: [{
  name: "defaultname",
  question: "default question",
  answer: "default answer"
  }]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };

    default:
      return state;
    }
}
