import React, { Component } from 'react';
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
    },
    footer:{
        borderTop : '#999999'
    }
  });

  
  class Footer extends Component{
      render(){
        const { classes } = this.props;
        return(
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}><img src="https://placeimg.com/200/140/4" alt="logo"/></Grid>    
                <Grid item xs={3}>
                개업공인중개사표시 : XXXX (02)1234-1234 대표 홍길동<br/>
                Copyright (주)hostel, 부동산 중개법인 XXXX(주)    
                </Grid>    
            </Grid>
        </Container>
        )
    }
}

export default withStyles(useStyles)(Footer);