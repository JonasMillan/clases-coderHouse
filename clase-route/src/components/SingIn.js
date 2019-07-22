import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import auth from '../auth'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(),
    },

});

class SingIn extends Component {
    state = {
        email:'',
        password:''
    };
    authEmailPass = () => {
        const userData = {email:this.state.email,password:this.state.password}
        auth.login(userData, () => this.props.history.push('/app'))
    }
    handleChange = name => event => this.setState({ [name]: event.target.value })
    render () {
        const {classes} = this.props
        return (
            <div>
                <h1> Login </h1>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        autoComplete="email"
                        margin="normal"
                    />
                    <TextField
                        id="standard-password"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                    <Button onClick={this.authEmailPass} variant="contained" color="primary" className={classes.button}>
                        login
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(SingIn)