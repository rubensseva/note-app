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
    this.state = {
      cardDialogOpen: false,
      dialogName: "",
      dialogQuestion: "",
      dialogAnswer: ""
    };

    this.redirectToTopicScreen = this.redirectToTopicScreen.bind(this);
  }

  componentDidMount() {
    if (this.props.topics.activeTopicId) {
      this.props.getCardsByUserTopic(this.props.topics.activeTopicId);
    }
  }

  redirectToTopicScreen() {
    if (!this.props.topics.activeTopicId) {
      return <Redirect to="/topics" />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Grid container>
        <AddCardButton
          activeTopicId={this.props.topics.activeTopicId}
          addCard={this.props.addCard}
        />
        <CardsContainer
          cards={this.props.cards}
          activeTopicId={this.props.topics.activeTopicId}
          deleteCard={this.props.deleteCard}
          getCardsByUserTopic={this.props.getCardsByUserTopic}
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
