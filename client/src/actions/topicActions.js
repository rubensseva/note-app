import axios from "axios";

export const addTopic = (_name, _description, _ownerId) => dispatch => {
  console.log("here:", _ownerId);
  if (!_name || !_ownerId) {
    console.error("name or owner not defined");
    throw new Error("name or ownerid not defined");
  }
  axios
    .post("api/topics/addTopic", {
      name: _name,
      description: _description,
      userId: _ownerId
    })
    .then(response => {
      console.log(response);
      dispatch(getTopicsByUser());
    })
    .catch(err => console.log(err));
};

export const getTopicsByUser = userId => dispatch => {
  if (!userId) {
    throw new Error("no userId provided");
  }
  axios
    .get("api/topics", {
      params: {
        userId
      }
    })
    .then(response => {
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
  console.log("setting active topic");
  console.log(topicId);
  dispatch({
    type: "SET_ACTIVE_TOPIC",
    payload: topicId
  });
};
