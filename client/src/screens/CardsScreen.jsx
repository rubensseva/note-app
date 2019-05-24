import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { MarkdownPreview } from 'react-marked-markdown'
import Grid from "@material-ui/core/Grid";

import {
  addCard,
  getCardsByUserTopic,
  deleteCard,
  updateCard
} from "../actions/cardActions";
import CardsContainer from "../components/CardsContainer";
import AddCardButton from "../components/AddCardButton";

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.redirectToTopicScreen = this.redirectToTopicScreen.bind(this);
  }

  componentDidMount() {
    const { topics, getCardsByUserTopic } = this.props;
    const { activeTopicId } = topics;
    console.log(this.props)
    if (activeTopicId) {
      getCardsByUserTopic(activeTopicId);
    }
  }

  redirectToTopicScreen() {
    const { topics } = this.props;
    if (!topics.activeTopicId) {
      return <Redirect to="/topics" />;
    } else {
      return null;
    }
  }

  render() {
    const {
      topics,
      addCard,
      cards,
      deleteCard,
      updateCard,
      getCardsByUserTopic
    } = this.props;
    console.log("topics")
    console.log(topics)
    console.log(topics.activeTopicId)
    let mrk = "`this is code() int char def() ` hello "
    return (
      <Grid container>
        {this.redirectToTopicScreen()}
        <MarkdownPreview
          value={"```this should be some code```"}
          markedOptions={{
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
          }} />
        <AddCardButton activeTopicId={topics.activeTopicId} addCard={addCard} />
        <CardsContainer
          cards={cards}
          activeTopicId={topics.activeTopicId}
          deleteCard={deleteCard}
          updateCard={updateCard}
          getCardsByUserTopic={getCardsByUserTopic}
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  topics: state.topics
});

export default connect(
  mapStateToProps,
  { addCard, getCardsByUserTopic, deleteCard, updateCard }
)(Cards);
