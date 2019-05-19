

export const addCard = (_name, _question, _answer) => dispatch => {
  console.log("hello");
  dispatch({
    type: "ADD_CARD",
    payload: {
      name: _name,
      question: _question,
      answer: _answer
    }
  })
};
