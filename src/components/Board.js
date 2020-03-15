import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root:{
		width: '100%'
	}
})

class Board extends Component{
    render(){
        return(
            <div>
                <BoardProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <BoardInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        // <Paper>
        //     <Table>
        //         <TableHead>
        //             <TableCell>이미지</TableCell>
        //             <TableCell>매물번호</TableCell>
        //             <TableCell>지역</TableCell>
        //             <TableCell>제목</TableCell>
        //             <TableCell>서브제목</TableCell>
        //             <TableCell>보증금</TableCell>
        //             <TableCell>월세</TableCell>
        //             <TableCell>희망권리금</TableCell>
        //             <TableCell>합계</TableCell>
        //             <TableCell>실매물확인일</TableCell>
        //             <TableCell>조회수</TableCell>
        //             <TableCell>매도인</TableCell>
        //             <TableCell>휴대폰</TableCell>
        //         </TableHead>
        //         <TableBody>
        //             <TableRow>
        //                 <TableCell></TableCell>

        //             </TableRow>
        //         </TableBody>
        //     </Table>
        // </Paper>
        )
    }
}

class BoardProfile extends Component {
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class BoardInfo extends Component {
    render(){
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
export default Board;