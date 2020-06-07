import React, { Component, useHistory } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import {
  getTopicsByUser,
  setActiveTopic,
  addTopic
} from "../actions/topicActions";
import TopicsList from "../components/TopicsList";
import AddTopicButton from "../components/AddTopicButton";

export class TopicsScreen extends Component {
  componentDidMount() {
    const { getTopicsByUser, user: { user: { _id } } } = this.props;
    if (_id) {
      getTopicsByUser(_id);
    }
  }

  render() {
    const { topics, user: { user: { _id: userId } }, addTopic, setActiveTopic } = this.props;
    console.log("userid", userId);
    console.log(this.props.user)
    return (
      <Grid container direction="column" alignItems="center">
        <Paper style={{ margin: "40px" }}>
          <Typography variant="h6" style={{ margin: "10px" }}>
            Here you may find your own created topics, or create a new one
          </Typography>
        </Paper>
        <AddTopicButton addTopic={addTopic} userId={userId} />
        <TopicsList topics={topics} setActiveTopic={setActiveTopic} />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topics,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getTopicsByUser, setActiveTopic, addTopic }
)(TopicsScreen);
