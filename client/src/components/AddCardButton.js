import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


export class AddCardButton extends Component {
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
  }

  handleAddCardDialogOpen() {
    this.setState({ cardDialogOpen: true });
  }

  handleAddCardDialogSubmit() {
    this.props.addCard(
      this.state.dialogName,
      this.state.dialogQuestion,
      this.state.dialogAnswer,
      this.props.activeTopicId
    );
    this.setState({ cardDialogOpen: false, dialogName: "", dialogQuestion: "", dialogAnswer: "" });
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

  render() {
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
      </Grid>
    );
  }
}


export default AddCardButton;