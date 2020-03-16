import React, { Component } from 'react';
import Ad1 from './components/etc/Ad1';
import HeaderWrap from './components/header/HeaderWrap';
import Ad2 from './components/etc/Ad2';
import ContentWrap from './components/contents/ContentWrap';
import IconList from './components/etc/IconList';
import FooterWrap from './components/footer/FooterWrap';

import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  
})

class App extends Component{
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Ad1/>
        <HeaderWrap/>
        <Ad2/>
        <ContentWrap/>
        <IconList/>
        <FooterWrap/>
      </div>
    )
  }
}

export default withStyles(styles)(App);
