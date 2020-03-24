import React, { Component } from 'react';
import Board from './Board';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    table:{
      minwidth: 1100,
      
    },
    wrap:{
      border:'1px solid #efefef'
    },
    innerWrap:{
      width:1100,
      margin:'0 auto'
    }
})

class ContentWrap extends Component{
  state = {
    products: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({products: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('api/products');
    const body = await response.json();
    return body;
  }
  render(){
      const { classes } = this.props;
      return(
          <div className={classes.wrap}>
            <div className={classes.innerWrap}>
              <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>식별ID</TableCell>
                    <TableCell>이미지</TableCell>
                    <TableCell>매물번호</TableCell>
                    <TableCell>지역</TableCell>
                    <TableCell>제목</TableCell>
                    <TableCell>서브제목</TableCell>
                    <TableCell>보증금</TableCell>
                    <TableCell>월세</TableCell>
                    <TableCell>희망권리금</TableCell>
                    <TableCell>합계</TableCell>
                    <TableCell>실매물확인일</TableCell>
                    <TableCell>조회수</TableCell>
                    <TableCell>매도인</TableCell>
                    <TableCell>휴대폰</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    this.state.products ? this.state.products.map(c => {
                    return (
                        <Board
                        key={c.id}
                        id={c.id}
                        image={c.image}
                        productNo={c.productNo}
                        region={c.region}
                        title={c.title}
                        subtitle={c.subtitle}
                        guaranteePrice={c.guaranteePrice}
                        monthPrice={c.monthPrice}
                        wishRightPrice={c.wishRightPrice}
                        totalPrice={c.totalPrice}
                        realProdChkday={c.realProdChkday}
                        viewCnt={c.viewCnt}
                        sellerName={c.sellerName}
                        sellerPhone={c.sellerPhone}
                        />
                    )
                    }) : ""
                }
                </TableBody>
              </Table>
              </div>
          </div>
      )
  }
}

export default withStyles(styles)(ContentWrap);