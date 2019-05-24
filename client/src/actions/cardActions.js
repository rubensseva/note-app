import axios from "axios";

export const addCard = (_name, _question, _answer, _topicId) => dispatch => {
  console.log("topicid")
  console.log(_topicId)
  axios
    .post("/api/cards/addCardToTopic", {
      name: _name,
      question: _question,
      answer: _answer,
      topicId: _topicId
    })
    .then(response => {
      console.log(response);
      dispatch(getCardsByUserTopic(_topicId));
    })
    .catch(err => console.log(err));
};

export const updateCard = (name, question, answer, topicId, cardId) => dispatch => {
  console.log("update card")
  console.log(name, question, answer, cardId, topicId)
  axios
    .post("/api/cards/updateCardById", {
      name,
      question,
      answer,
      cardId
    })
    .then(response => {
      console.log(response)
      dispatch(getCardsByUserTopic(topicId))
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteCard = (cardId, topicId) => dispatch => {
  axios
    .post("/api/cards/deleteCard", {
      cardId
    })
    .then(response => {
      console.log(response);
      dispatch(getCardsByUserTopic(topicId));
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCardsByUserTopic = _topicId => dispatch => {
  axios
    .post("/api/cards/getCardsByUserTopic", { topicId: _topicId })
    .then(response => {
      console.log(response);
      dispatch({
        type: "GET_ACTIVE_TOPIC_CARDS",
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
