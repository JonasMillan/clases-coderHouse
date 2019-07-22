import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import auth from '../auth'
import { withRouter } from 'react-router-dom'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  nav:{
    backgroundColor: '#f44336'
  }
};

function NavBarCustom(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            NOT PINTEREST
          </Typography>
          {
            (auth.user === null) ? 
            (
              <Fragment>
                <Button color="inherit" onClick={() => props.history.push('/login')}>Login</Button>
                <Button color="inherit" onClick={() => props.history.push('/register')}>Register</Button>
              </Fragment>
            )
            : 
            (
              <Fragment>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  {auth.user.email}
                </Typography>
                <Button color="inherit" onClick={
                  () => {
                      auth.logout(() => {
                          props.history.push('/')
                      })
                  }
              }>logout</Button>
              </Fragment>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBarCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(NavBarCustom));
