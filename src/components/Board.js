import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Board extends Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="{this.props.name}"/></TableCell>
                <TableCell>{this.props.productNo}</TableCell>
                <TableCell>{this.props.region}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.subtitle}</TableCell>
                <TableCell>{this.props.guaranteePrice}</TableCell>
                <TableCell>{this.props.monthPrice}</TableCell>
                <TableCell>{this.props.wishRightPrice}</TableCell>
                <TableCell>{this.props.totalPrice}</TableCell>
                <TableCell>{this.props.realProdChkday}</TableCell>
                <TableCell>{this.props.viewCnt}</TableCell>
                <TableCell>{this.props.sellerName}</TableCell>
                <TableCell>{this.props.sellerPhone}</TableCell>
            </TableRow>
        )
    }
}

export default Board;