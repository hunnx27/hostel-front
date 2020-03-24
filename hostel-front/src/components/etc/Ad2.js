import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
    ad2_wrap:{
       
    },
    ad2_innerWrap:{
        margin:'0 auto',
        width:1100,
        position:'relative',
        '& img':{
            width:'100%'
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
    },
    comment:{
        position:'absolute',
        top:30,
        width:1100,
        left:0,
        textAlign:'center',
        fontWeight:'bolder',
        fontSize:20
    }
})
class Ad2 extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.ad2_wrap}>
                <div className={classes.ad2_bg}></div>
                <div className={classes.ad2_innerWrap}>
                    <ul>
                        <li>
                            <img src="https://placeimg.com/1100/80/3"/>
                        </li>
                    </ul>
                    <p className={classes.comment}>광고2 영역</p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Ad2);