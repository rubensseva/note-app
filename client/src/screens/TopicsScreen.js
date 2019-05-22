import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import {
  getTopicsByUser,
  setActiveTopic,
  addTopic
} from "../actions/topicActions";
import TopicsList from "../components/TopicsList";
import AddTopicButton from "../components/AddTopicButton";

export class TopicsScreen extends Component {
  componentDidMount() {
    this.props.getTopicsByUser();
  }

  render() {
    return (
      <Grid container direction="column" alignItems="center">
        This is the topics screen
        <AddTopicButton addTopic={this.props.addTopic} />
        <TopicsList
          topics={this.props.topics}
          setActiveTopic={this.props.setActiveTopic}
        />
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
