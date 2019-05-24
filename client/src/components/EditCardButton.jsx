import React, { Component } from "react";
import axios from 'axios'
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab"
import CreateIcon from "@material-ui/icons/Create"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export class EditCardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      loading: true,
      dialogName: "",
      dialogQuestion: "",
      dialogAnswer: ""
    };

    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleDialogSubmit = this.handleDialogSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleDialogOpen() {
    console.log(this.props.cardId)
    this.setState({ dialogOpen: true, loading: true });
    axios.post('/api/cards/getCardById', {
      cardId: this.props.cardId
    })
    .then(response => {
      console.log("got a response")
      console.log(response)
      this.setState({
        dialogName: response.data[0].name,
        dialogQuestion: response.data[0].question,
        dialogAnswer: response.data[0].answer,
        loading: false
      })
    })
    .catch(err => console.log(err))
  }

  handleDialogSubmit() {
    const { topics, addCard } = this.props;
    const {
      dialogName,
      dialogQuestion,
      dialogAnswer,
    } = this.state;
    addCard(dialogName, dialogQuestion, dialogAnswer, topics.activeTopicId);
    this.setState({
      dialogOpen: false,
      dialogName: "",
      dialogQuestion: "",
      dialogAnswer: ""
    });
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

  handleDialogClose() {
    this.setState({ dialogOpen: false });
  }

  render() {
    const {
      dialogOpen,
      dialogName,
      dialogQuestion,
      dialogAnswer
    } = this.state;
    return (
      <Grid container>

        <Dialog open={dialogOpen} onClose={this.handleDialogClose}>
          <DialogContent>
            {" "}
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
              value={dialogName}
              onChange={this.handleNameChange}
            />
            <TextField
              margin="dense"
              id="question"
              label="Question"
              type="text"
              fullWidth
              multiline
              value={dialogQuestion}
              onChange={this.handleQuestionChange}
            />
            <TextField
              margin="dense"
              id="answer"
              label="Answer"
              type="text"
              fullWidth
              multiline
              value={dialogAnswer}
              onChange={this.handleAnswerChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleEditCardDialogSubmit}>submit</Button>
          </DialogActions>
        </Dialog>
        <Fab
          size="small"
          style={{
            opacity: "0.4",
          }}
          onClick={this.handleDialogOpen}
        >
          <CreateIcon />
        </Fab>
      </Grid>
    );
  }
}

export default EditCardButton;
