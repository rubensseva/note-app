import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import {
  addCard,
  getCardsByUserTopic,
  deleteCard
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
      getCardsByUserTopic
    } = this.props;
    return (
      <Grid container>
        <AddCardButton activeTopicId={topics.activeTopicId} addCard={addCard} />
        <CardsContainer
          cards={cards}
          activeTopicId={topics.activeTopicId}
          deleteCard={deleteCard}
          getCardsByUserTopic={getCardsByUserTopic}
        />
        {this.redirectToTopicScreen()}
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
  { addCard, getCardsByUserTopic, deleteCard }
)(Cards);
