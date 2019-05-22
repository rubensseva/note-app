import axios from "axios";

export const addTopic = (_name, _description) => dispatch => {
  axios
    .post("api/topics/addTopic", {
      name: _name,
      description: _description
    })
    .then(response => {
      console.log(response);
      dispatch(getTopicsByUser());
    })
    .catch(err => console.log(err));
};

export const getTopicsByUser = () => dispatch => {
  axios
    .get("api/topics")
    .then(response => {
      console.log("response");
      console.log(response);

      dispatch({
        type: "GET_TOPICS",
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const setActiveTopic = topicId => dispatch => {
  console.log("in set active topic action");
  console.log(topicId);
  dispatch({
    type: "SET_ACTIVE_TOPIC",
    payload: topicId
  });
};
