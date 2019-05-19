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
      <CardBox name={card.name} question={card.question} answer={card.answer} />
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
        <Grid item xs={6} sm={6} lg={6} xl={6}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            {cardsLeft}
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6} lg={6} xl={6}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            {cardsRight}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CardsBox;
