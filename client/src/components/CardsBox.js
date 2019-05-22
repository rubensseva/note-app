import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import CardBox from "./CardBox";

export class CardsBox extends Component {
  render() {
    console.log("printing cards in cardsbox");
    console.log(this.props.cards);

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

    console.log("mapped");
    console.log(cardsMapped);
    console.log("right");
    console.log(cardsRight);
    console.log("left");
    console.log(cardsLeft);

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

export default CardsBox;
