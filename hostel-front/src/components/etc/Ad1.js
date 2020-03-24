import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    ad1_wrap : {
        position:'relative',
        minWidth:1100
    },
    ad1_section : {
        margin:'0 auto',
        width:1100,
        height:80,
        zIndex:1,
        position:'relative',
        fontSize:25,
        fontWeight:'bolder',
        textAlign:'center'
    },
    ad1_img : {
        width:'100%',
        position:'absolute',
        top:0,
        left:0,
        height:80
    }
}

class Ad1 extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.ad1_wrap}>
                <img src="https://placeimg.com/1400/80/3" className={classes.ad1_img} />
                <div className={classes.ad1_section}>
                    광고1 영역
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Ad1);