import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

const styles = theme => ({
    gnb_wrap: {
        borderBottom:'1px solid #efefef'
    },
    gnb_inner_wrap: {
        width:1100,
        margin:'0 auto',
        '& ul':{
            overflow:'hidden',
            '& li':{
                float:'left',
                '& > a':{
                    display:'block',
                    padding:'14px 38px',
                    fontWeight:'bolder',
                    fontSize:16
                }
            }
        }
    }
});

class Nav extends Component{
    render(){
        const { classes } = this.props;
        return(
            <Menu classes={classes}/>
        )
    }
}
class Menu extends Component{
    render(){
        const { classes } = this.props;
        return(
        <div className={classes.gnb_wrap}>
            <nav className={classes.gnb_inner_wrap}>
                <ul>
                    <li><a href="#">점포 매매</a></li>
                    <li><a href="#">상가 임대 매매</a></li>
                    <li><a href="#">프랜차이즈</a></li>
                    <li><a href="#">거래 게시판</a></li>
                    <li><a href="#">창업매거진</a></li>
                    <li><a href="#">에이전트</a></li>
                    <li><a href="#">서비스안내</a></li>
                </ul>
            </nav>
        </div>
        )
    }
}

export default withStyles(styles)(Nav);