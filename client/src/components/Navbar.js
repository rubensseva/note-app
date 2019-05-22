import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"


export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {topicsRedirect: false}

    this.setTopicRedirect = this.setTopicRedirect.bind(this)
  }

  
  setTopicRedirect() {
    this.setState({topicsRedirect: true})
  }

  renderRedirects() {
    if (this.state.topicsRedirect) {
      this.setState({topicsRedirect: false})
      return <Redirect to="/topics" />
    }
  }

  render() {
    return (
     <AppBar position="static">
      <Toolbar>
        <Button color="inherit">
          Logout
        </Button>
        <Button onClick={this.setTopicRedirect} color="inherit">
          Topics
        </Button>
      </Toolbar>
      {this.renderRedirects()}
    </AppBar>
    )
  }
}


export default Navbar;