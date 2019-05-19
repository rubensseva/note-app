import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { addCard } from "../actions/cardActions";
import CardsBox from "../components/CardsBox.js";

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDialogOpen: false,
      dialogName: "",
      dialogQuestion: "",
      dialogAnswer: ""
    };

    this.handleAddCardDialogOpen = this.handleAddCardDialogOpen.bind(this);
    this.handleAddCardDialogSubmit = this.handleAddCardDialogSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleAddCardDialogOpen() {
    this.setState({ cardDialogOpen: true });
  }
  handleAddCardDialogSubmit() {
    console.log("do we get here");
    this.setState({ cardDialogOpen: false });
    this.props.addCard(
      this.state.dialogName,
      this.state.dialogQuestion,
      this.state.dialogAnswer
    );
  }

  handleNameChange(e) {
    this.setState({ dialogName: e.target.value });
  }
  handleQuestionChange(e) {
    this.setState({ dialogQuestion: e.target.value });
  }
  handleAnswerChange(e) {
    this.setState({ dialogAnswer: e.target.value });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleAddCardDialogOpen}>
          press here to add a card
        </Button>
        <Dialog open={this.state.cardDialogOpen}>
          <DialogContent>
            <DialogTitle>Add a new card</DialogTitle>
            <DialogContentText>
              You may submit a new card here
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name of card"
              type="text"
              fullWidth
              onChange={this.handleNameChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="question"
              label="Question"
              type="text"
              fullWidth
              multiline
              onChange={this.handleQuestionChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="answer"
              label="Answer"
              type="text"
              fullWidth
              multiline
              onChange={this.handleAnswerChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAddCardDialogSubmit}>submit</Button>
          </DialogActions>
        </Dialog>

        <CardsBox cards={this.props.cards} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(
  mapStateToProps,
  { addCard }
)(Cards);
