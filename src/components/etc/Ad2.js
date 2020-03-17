import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
    ad2_wrap:{
        position:'relative',
       '& img':{
           position:'absolute',
           top:0,
           left:0
       }
    },
    ad2_bg:{
        height:37,
        background:'#a7acc3'
    },
    ad2_content:{
        height:100,
        margin:'0 auto',
        textAlign:'center',
        borderBottom:'1px solid #efefef'
    }
})
class Ad2 extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.ad2_wrap}>
                <p className={classes.ad2_bg}></p>
                <p className={classes.ad2_content}>광고2 영역</p>
                <img src="https://placeimg.com/1400/80/3"/>
            </div>
        )
    }
}

export default withStyles(styles)(Ad2);