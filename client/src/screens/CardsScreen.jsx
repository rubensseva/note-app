import React, { Component } from "react";
import { connect } from "react-redux";
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
  }

  componentDidMount() {
    const { topics, getCardsByUserTopic } = this.props;
    const { activeTopicId } = topics;
    console.log(this.props);
    if (activeTopicId) {
      getCardsByUserTopic(activeTopicId);
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
    return (
      <Grid container>
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
  topics: state.topics,
  user: state.user
});

export default connect(mapStateToProps, {
  addCard,
  getCardsByUserTopic,
  deleteCard,
  updateCard
})(Cards);
