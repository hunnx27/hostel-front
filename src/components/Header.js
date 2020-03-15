import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  });

class Header extends Component{
    render(){
        const { classes } = this.props;
        return(
        <Container minWidth="sm">
            <Grid container>
                <Grid item xs={2}><Logo/></Grid>
                <Grid item xs={10}><Menu/></Grid>
            </Grid>
        </Container>
        )
    }
}

class Logo extends Component{
    render(){
        return(
        <div>
            <img src="https://placeimg.com/150/150/6" alt="logo"/>
        </div>
        )
    }
}
class Menu extends Component{
    render(){
        return(
        <Container minWidth="9">
            <Grid container>
                <Grid item xs={2}>점포매매</Grid>
                <Grid item xs={2}>점포매매</Grid>
                <Grid item xs={2}>점포매매</Grid>
                <Grid item xs={3}>점포매매</Grid>
                <Grid item xs={3}>점포매매</Grid>
            </Grid>
            <ul></ul>
        </Container>
        )
    }
}

export default Header;