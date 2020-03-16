import React, { Component } from 'react';

import Header from './Header';
import GlobalNav from './GlobalNav';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
});

class HeaderWrap extends Component{
    render(){
        const {classes} = this.props;
        return(
            <header className={classes.header_wrap}>
                <Header/>
                <GlobalNav/>
            </header>
        )
    }
}

export default withStyles(styles)(HeaderWrap);