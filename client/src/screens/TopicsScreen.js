import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle"

import { getTopicsByUser, setActiveTopic, addTopic } from '../actions/topicActions'
import TopicsList from '../components/TopicsList';

export class TopicsScreen extends Component {
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
    }

    componentDidMount() {
        this.props.getTopicsByUser()
    }

    handleDialogOpen() {
        this.setState({ topicDialogOpen: true })
    }
    addTopic() {
        this.props.addTopic(this.state.topicName, this.state.topicDescription)
        this.props.getTopicsByUser()
        this.setState({topicDialogOpen: false})
    }


  handleNameChange(e) {
    this.setState({ topicName: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ topicDescription: e.target.value });
  }

    render() {
        return (
            <Grid container direction="column" alignItems="center">
                <Button onClick={this.handleDialogOpen}>
                    add topic
                </Button>
                    <Dialog open={this.state.topicDialogOpen}>
                    <DialogContent> <DialogTitle>Add a new topic</DialogTitle>
                        <DialogContentText>
                        You may add a new topic here
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
                        margin="dense"
                        id="question"
                        label="Question"
                        type="text"
                        fullWidth
                        multiline
                        onChange={this.handleDescriptionChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.addTopic}>submit</Button>
                    </DialogActions>
                    </Dialog>
                This is the topics screen
                <TopicsList topics={this.props.topics} setActiveTopic={this.props.setActiveTopic}/>
            </Grid>
        )
    }
}


const mapStateToProps = state => ({ 
    topics: state.topics,
    user: state.user
});

export default connect(
  mapStateToProps,
  { getTopicsByUser, setActiveTopic, addTopic }
)(TopicsScreen);