import React from "react";
import Grid from "@material-ui/core/Grid";

import CardBox from "./CardBox";

export const CardsContainer = props => {
  const { cards, activeTopicId, deleteCard, getCardsByUserTopic } = props;
  console.log(props)

  let cardsMapped = cards.cards.map(card => (
    <CardBox
      key={card.id}
      card={card}
      activeTopicId={activeTopicId}
      deleteCard={deleteCard}
      getCardsByUserTopic={getCardsByUserTopic}
    />
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
        <Grid container direction="row" alignItems="center" justify="center">
          {cardsMapped}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardsContainer;
