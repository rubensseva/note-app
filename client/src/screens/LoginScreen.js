import React, {Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import LoginForm from '../components/LoginForm';

export class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid container direction="column">
                <LoginForm />
            </Grid>
        )
    }
}


const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {})(LoginScreen);
