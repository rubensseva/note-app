import axios from 'axios';

export const addCard = (_name, _question, _answer, _topicId) => dispatch => {
  console.log("add card action creator");
  axios.post('/api/cards/addCardToTopic', {
    name: _name,
    question: _question,
    answer: _answer,
    topicId: _topicId,
  })
  .then((response) => {
    console.log("add card probably a success!")
    console.log(response)
  })
  .catch((err) => console.log(err))
};

export const deleteCard = (cardId) => dispatch => {
  console.log("deleting card")
  axios.post('/api/cards/deleteCard', {
    cardId
  })
  .then((response) => {
    console.log("deletion probably went well, but who knows these days")
    console.log(response)
  })
  .catch((err) => {
    console.log("catastrophic error, everything burns")
    console.log(err)
  })
}

export const getCardsByUserTopic = (_topicId) => dispatch => {
  console.log("get cards action creater");
  console.log(_topicId)
  axios.post('/api/cards/getCardsByUserTopic', {topicId: _topicId})
  .then((response) => {
    console.log("got a card response:")
    console.log(response)
    dispatch({
      type: "GET_ACTIVE_TOPIC_CARDS",
      payload: response.data
    })
  })
  .catch((err) => console.log(err))
}