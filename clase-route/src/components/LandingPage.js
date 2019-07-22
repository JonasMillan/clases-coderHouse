import React, { Component } from 'react'
import auth from '../auth'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
//https://api.unsplash.com/photos/?client_id=422be8fec1441ab6650990fa668d8a8db9ffa13fc4e23373f2bf2eef21655ddb&page=3

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  });

const client_id = '422be8fec1441ab6650990fa668d8a8db9ffa13fc4e23373f2bf2eef21655ddb'

class LandingPage extends Component{

    state={
        photos: null,
        pagina: 1
    }

    componentDidMount(){
        this.images()
    }

    images = () => {
        fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${this.state.pagina}`)
        .then(response => response.json())
        .then(json => this.setState({photos: json}))
    }

    nextPage = () => this.setState({pagina: this.state.pagina + 1},() => this.images())
    
    prevPage = () => this.setState({pagina: this.state.pagina - 1},() => this.images())

    render(){
        const { classes } = this.props;
        return(
            <Container maxWidth="lg">
                <div className={classes.root}>
                    {
                        (this.state.photos !== null) 
                        ?
                        (
                            <GridList cellHeight={160} cols={5}>
                            {this.state.photos.map(photo => (
                            <GridListTile key={photo.id} cols={1}>
                                <img src={photo.urls.small} alt="titulo" />
                            </GridListTile>
                            ))}
                            </GridList>
                        )
                        :
                        'loading...'
                    }
                    {
                        (this.state.pagina > 1) ? <Button color="inherit" onClick={this.prevPage}>back</Button> : null
                    }
                    <Button color="inherit" onClick={this.nextPage}>next</Button>
                </div>
            </Container>
        )
    }
}

export default withStyles(styles)(LandingPage)