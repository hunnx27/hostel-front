import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

const styles = theme => ({
    wrap:{
        borderBottom:'1px solid #ddd'
    },
    innerWrap:{
        width:1100,
        margin:'0 auto',
        overflow:'hidden',
        '& li':{
            float:'left',
            border:'1px solid #efefef',
            padding:'30px 85px',
            display:'blcok'
        }
    }

})

class IconList extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div class={classes.wrap}>
                <ul className={classes.innerWrap}>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                </ul>
            </div>
        )
    }
}

export default withStyles(styles)(IconList);