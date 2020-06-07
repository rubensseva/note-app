import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export class DeleteCardButton extends Component {
  constructor(props) {
    super(props);
    this.state = { dialogOpen: false };

    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleConfirmedDelete = this.handleConfirmedDelete.bind(this);
  }

  handleDialogOpen() {
    this.setState({ dialogOpen: true });
  }
  handleDialogClose() {
    this.setState({ dialogOpen: false });
  }

  handleConfirmedDelete() {
    const { deleteCard, cardId, topicId } = this.props;
    this.setState({ dialogOpen: false });
    deleteCard(cardId, topicId);
  }

  render() {
    const { dialogOpen } = this.state;
    return (
      <Grid container>
        <Dialog open={dialogOpen} onClose={this.handleDialogClose}>
          <DialogContent>
            {" "}
            <DialogTitle>
              Are you sure you want to delete this card?
            </DialogTitle>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleConfirmedDelete}>Delete</Button>
            <Button onClick={this.handleDialogClose}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <Fab
          size="small"
          style={{
            opacity: "0.4"
          }}
          onClick={this.handleDialogOpen}
        >
          <DeleteIcon />
        </Fab>
      </Grid>
    );
  }
}

export default DeleteCardButton;
