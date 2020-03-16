import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    header_wrap:{
        borderBottom:'1px solid #ddd'
    },
    header_inner_wrap:{
        width:1100,
        margin:'0 auto',
        position:'relative',
        overflow:'hidden'
    },
    logo:{
        float:'left'
    },
    search_box:{
        float:'left',
        margin:'19px 0 0 135px'
    },
    search_input:{
        '& input':{
            width:340,
        }
    },
    lnb_wrap:{
        position:'absolute',
        right:0,
        top:0,
        '& > ul': {
            '& li':{
                float:'left',
                '& a':{
                    display:'block',
                    padding:'2px 10px'
                }
            }
        }
    }
});

class Header extends Component{
    render(){
        const { classes } = this.props;
        return(
        <div className={classes.header_wrap}>
            <div className={classes.header_inner_wrap}>
                <h1 className={classes.logo}><a href="#"><img src="https://placeimg.com/225/60/3"/></a></h1>
                <div className={classes.search_box}>
                    <form className={classes.search_input}>
                        <TextField id="standard-basic" placeholder="원하시는 매물을 검색하세요."/>
                        <Button color="secondary">SEARCH</Button>
                    </form>
                </div>
                <LocalNav classes={classes}/>
            </div>
        </div>
        )
    }
}

class LocalNav extends Component{
    render(){
        return(
        <nav className={this.props.classes.lnb_wrap}>
            <ul>
                <li><a href="#">로그인</a></li>
                <li><a href="#">회원가입</a></li>
            </ul>
        </nav>
        )
    }
}


export default withStyles(styles)(Header);