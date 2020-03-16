import React, { Component } from 'react';
import Footer1 from './Footer1'
import Footer2 from './Footer2'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

  
  class FooterWrap extends Component{
      render(){
        const { classes } = this.props;
        return(
            <div>
                <Footer1/>
                <Footer2/>
            </div>
            
        )
    }
}

export default withStyles(styles)(FooterWrap);