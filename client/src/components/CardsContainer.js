import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import CardBox from "./CardBox";

export class CardsContainer extends Component {
  render() {

    let cardsMapped = this.props.cards.cards.map(card => (
      <CardBox name={card.name} question={card.question} answer={card.answer} card={card} activeTopicId={this.props.activeTopicId} deleteCard={this.props.deleteCard} getCardsByUserTopic={this.props.getCardsByUserTopic}/>
    ));

    let cardsRight = [];
    let cardsLeft = [];

    let changer = false;
    for (let i = 0; i < cardsMapped.length; i += 1) {
      if (changer) {
        cardsRight.push(cardsMapped[i]);
      } else {
        cardsLeft.push(cardsMapped[i]);
      }
      changer = !changer;
    }


    return (
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={1} sm={6} lg={9} xl={12}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
          >
            {cardsMapped}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CardsContainer;
