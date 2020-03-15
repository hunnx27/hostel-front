import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class Header extends Component{
    render(){
        return(
        <Paper>
            <Menu/>
        </Paper>
        )
    }
}

class Menu extends Component{
    render(){
        return(
        <Paper>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul></ul>
        </Paper>
        )
    }
}

export default Header;