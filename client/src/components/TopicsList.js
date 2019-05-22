import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';


export class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.state = {topics: [], localChosenTopic: null}

    this.handleTopicSubmit = this.handleTopicSubmit.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)
  }

  handleTopicSubmit(_topicId) {
    this.props.setActiveTopic(_topicId);
    this.setState({ localChosenTopic: _topicId });
  }

  renderRedirect() {
    if(this.state.localChosenTopic) {
      return <Redirect to="/cards" />
    }
  }

  render() {
    let _topics;
      _topics = this.props.topics.topics.map(topic => (
      <Button onClick={() => this.handleTopicSubmit(topic.topicId)} variant="contained" style={{margin: "10px"}}>
        <Typography>
          {topic.name}
        </Typography>
      </Button>
      ))
    return (
      <Grid container direction="column">
        Topics:
        <Grid item >
        {_topics}
        </Grid>
        {this.renderRedirect()}
      </Grid>
    )
  }
}

export default TopicsList;