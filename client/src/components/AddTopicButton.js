import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle"


export class AddTopicButton extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            topicDialogOpen: false,
            topicName: "",
            topicDescription: ""
        })
        
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.addTopic = this.addTopic.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDialogOutsideClick = this.handleDialogOutsideClick.bind(this);
    }


    handleDialogOpen() {
        this.setState({ topicDialogOpen: true })
    }
    addTopic() {
        this.props.addTopic(this.state.topicName, this.state.topicDescription)
        this.setState({topicDialogOpen: false, topicName: "", topicDescription: ""})
    }


  handleNameChange(e) {
    this.setState({ topicName: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ topicDescription: e.target.value });
  }

  handleDialogOutsideClick() {
      this.setState({ topicDialogOpen: false })
  }

    render() {
        return (
            <Grid container direction="column" alignItems="center">
                <Button onClick={this.handleDialogOpen} variant="contained">
                    Press here to add a topic
                </Button>
                    <Dialog open={this.state.topicDialogOpen} onClose={this.handleDialogOutsideClick}>
                    <DialogContent> <DialogTitle>Add a new topic</DialogTitle>
                        <DialogContentText>
                          You may add a new topic here
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of topic"
                        type="text"
                        fullWidth
                        value={this.state.topicName}
                        onChange={this.handleNameChange}
                        />
                        <TextField
                        margin="dense"
                        id="description"
                        label="Description of topic"
                        type="text"
                        fullWidth
                        multiline
                        value={this.state.topicDescription}
                        onChange={this.handleDescriptionChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.addTopic}>Submit</Button>
                    </DialogActions>
                    </Dialog>
            </Grid>
        )
    }
}


export default AddTopicButton;