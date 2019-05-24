import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";

export class CardBox extends Component {
  constructor(props) {
    super(props);

    // Generate random color for background
    let r = Math.round(Math.random() * 0.5 * 255 + 127); //red 0 to 255
    let g = Math.round(Math.random() * 0.5 * 255 + 127); //green 0 to 255
    let b = Math.round(Math.random() * 0.5 * 255 + 127); //blue 0 to 255

    this.state = {
      isFlipped: false,
      color: "rgb(" + r + ", " + g + ", " + b + ")"
    };

    this.handleFlip = this.handleFlip.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  handleFlip() {
    const { isFlipped } = this.state;
    const _isFlipped = isFlipped;
    this.setState({ isFlipped: !_isFlipped });
  }

  handleDeleteCard() {
    const { card, activeTopicId, deleteCard } = this.props;
    deleteCard(card.id, activeTopicId);
  }

  render() {
    const { name, question, answer } = this.props;
    const { isFlipped, color } = this.state;
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Grid item style={{ width: "200px", margin: "10px" }} key="front">
          <Paper
            style={{ minHeight: "200px", backgroundColor: color }}
            onClick={this.handleFlip}
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6">{name}</Typography>
              <Typography variant="subheading">Question:</Typography>
              <Typography variant="subheading">{question}</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item style={{ width: "200px", margin: "10px" }} key="back">
          <Paper
            style={{ minHeight: "200px", backgroundColor: color }}
            onClick={this.handleFlip}
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="subheading">Answer:</Typography>
              <Typography variant="subheading">{answer}</Typography>
              <Fab
                size="small"
                style={{
                  opacity: "0.2",
                  position: "fixed",
                  top: "5px",
                  right: "15px"
                }}
                onClick={this.handleDeleteCard}
              >
                <DeleteIcon />
              </Fab>
            </Grid>
          </Paper>
        </Grid>
      </ReactCardFlip>
    );
  }
}

export default CardBox;
