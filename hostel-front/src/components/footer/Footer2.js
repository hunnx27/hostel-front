import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  wrap:{
      borderBottom:'1px solid #efefef'
  },
  innerWrap:{
      width:1100,
      margin:'0 auto',
      overflow:'hidden',
      '& img':{
        float:'left'
      },
      '& p':{
        float:'left'
      }
  }
});

class Footer2 extends Component{
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.wrap}>
          <div className={classes.innerWrap}>
             <img src="https://placeimg.com/200/100/5" alt="logo"/>
             <p>
              개업공인중개사표시 : XXXX (02)1234-1234 대표 홍길동<br/>
              Copyright (주)hostel, 부동산 중개법인 XXXX(주)    
              </p>    
          </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(Footer2);