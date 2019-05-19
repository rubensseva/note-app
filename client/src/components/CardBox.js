import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
    this.generateRandomColor = this.generateRandomColor.bind(this);
  }

  handleFlip() {
    const _isFlipped = this.state.isFlipped;
    this.setState({ isFlipped: !_isFlipped });
  }

  generateRandomColor() {
    let r = Math.round(Math.random() * 255); //red 0 to 255
    let g = Math.round(Math.random() * 255); //green 0 to 255
    let b = Math.round(Math.random() * 255); //blue 0 to 255
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <Grid item style={{ width: "200px" }} key="front">
          <Paper
            style={{ minHeight: "200px", backgroundColor: this.state.color }}
            onClick={this.handleFlip}
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6">{this.props.name}</Typography>
              <Typography variant="subheading">Question:</Typography>
              <Typography variant="p">{this.props.question}</Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item style={{ width: "200px" }} key="back">
          <Paper
            style={{ minHeight: "200px", backgroundColor: this.state.color }}
            onClick={this.handleFlip}
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="subheading">Answer:</Typography>
              <Typography variant="p">{this.props.answer}</Typography>
            </Grid>
          </Paper>
        </Grid>
      </ReactCardFlip>
    );
  }
}

export default CardBox;
