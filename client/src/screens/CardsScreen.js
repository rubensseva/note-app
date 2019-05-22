import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { addCard, getCardsByUserTopic, deleteCard } from "../actions/cardActions";
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
    this.handleDialogOutsideClick = this.handleDialogOutsideClick.bind(this);
    this.redirectToTopicScreen = this.redirectToTopicScreen.bind(this);
  }

  componentDidMount() {
    console.log("getting cards with topic:")
    console.log(this.props.topics.activeTopicId)
    if (this.props.topics.activeTopicId) {
      console.log("firing getCardsByUserTopic!!!")
      this.props.getCardsByUserTopic(this.props.topics.activeTopicId)
    }
  }

  handleAddCardDialogOpen() {
    this.setState({ cardDialogOpen: true });
  }
  handleAddCardDialogSubmit() {
    console.log("Adding a card! printinfg state then props");
    console.log(this.state)
    console.log(this.props)
    this.props.addCard(
      this.state.dialogName,
      this.state.dialogQuestion,
      this.state.dialogAnswer,
      this.props.topics.activeTopicId
    );
    this.setState({ cardDialogOpen: false, dialogName: "", dialogQuestion: "", dialogAnswer: "" });
    if (this.props.topics.activeTopicId) {
      console.log("firing getCardsByUserTopic!!!")
      setTimeout(() => this.props.getCardsByUserTopic(this.props.topics.activeTopicId), 2000);
    }
  }

  handleNameChange(e) {
    this.setState({ dialogName: e.target.value });
  }
  handleQuestionChange(e) {
    this.setState({ dialogQuestion: e.target.value }); }
  handleAnswerChange(e) {
    this.setState({ dialogAnswer: e.target.value });
  }

  handleDialogOutsideClick() {
    this.setState({ cardDialogOpen: false})
  }

  redirectToTopicScreen() {
    if (!this.props.topics.activeTopicId) {
      return <Redirect to='/topics' />
    } else { return null }
  }

  render() {
    console.log("topic: ")
    console.log(this.props.topics.activeTopicId)
    return (
      <Grid container >
        <Button onClick={this.handleAddCardDialogOpen} variant="contained" style={{margin: "10px"}}>
          press here to add a card
        </Button>
        <Dialog open={this.state.cardDialogOpen} onClose={this.handleDialogOutsideClick}>
          <DialogContent> <DialogTitle>Add a new card</DialogTitle>
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
              value={this.state.dialogName}
              onChange={this.handleNameChange}
            />
            <TextField
              margin="dense"
              id="question"
              label="Question"
              type="text"
              fullWidth
              multiline
              value={this.state.dialogQuestion}
              onChange={this.handleQuestionChange}
            />
            <TextField
              margin="dense"
              id="answer"
              label="Answer"
              type="text"
              fullWidth
              multiline
              value={this.state.dialogAnswer}
              onChange={this.handleAnswerChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAddCardDialogSubmit}>submit</Button>
          </DialogActions>
        </Dialog>

        <CardsBox cards={this.props.cards} activeTopicId={this.props.topics.activeTopicId} deleteCard={this.props.deleteCard} getCardsByUserTopic={this.props.getCardsByUserTopic}/>
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
