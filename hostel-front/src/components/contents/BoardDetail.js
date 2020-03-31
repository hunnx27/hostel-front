import React, { Component } from 'react';

class BoardDetail extends Component{
    componentDidMount(){
        const {handle} = this.props.match.params;
        console.log({handle});
    }
    render(){
        return(
        <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
            DETAIL!
        </article>
        )
    }
}

export default BoardDetail;