import React, { Component } from 'react';
import Board from './components/Board'
import Header from './components/Header'
import Footer from './components/Footer'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})
const boards = [
  {
    'id':1,
    'image': 'https://placeimg.com/200/140/1',
    'productNo': '51-4149',
    'region': '연천군',
    'title': '모텔임대합니다. 임대 서울1시간거리',
    'subtitle': '저렴한 투자비@21객실',
    'guaranteePrice': '2000',
    'monthPrice': '200',
    'wishRightPrice': '1800',
    'totalPrice': '3800',
    'realProdChkday': '2019-10-29 14:12',
    'viewCnt': '337',
    'sellerName': '서도인',
    'sellerPhone': '010-1234-1234'
  },
  {
    'id':2,
    'image': 'https://placeimg.com/200/140/2',
    'productNo': '51-4149',
    'region': '서울 종로구',
    'title': '종로구 게스트하우스',
    'subtitle': '자리만 마음에 드시면 권리금 협상해드립니다!',
    'guaranteePrice': '2000',
    'monthPrice': '200',
    'wishRightPrice': '1800',
    'totalPrice': '3800',
    'realProdChkday': '2019-10-29 14:12',
    'viewCnt': '238',
    'sellerName': '최민수',
    'sellerPhone': '010-1234-1234'
  },
  {
    'id':3,
    'image': 'https://placeimg.com/200/140/3',
    'productNo': '51-4149',
    'region': '인천 미추홀구',
    'title': '유흥가 중심상권 모텔 임대',
    'subtitle': '백악관나이트 한국관나이트등 유흥가 중심상권 모텔',
    'guaranteePrice': '5000',
    'monthPrice': '440',
    'wishRightPrice': '1000',
    'totalPrice': '6000',
    'realProdChkday': '2019-10-29 14:12',
    'viewCnt': '337',
    'sellerName': '김수미',
    'sellerPhone': '010-1234-1234'
  }
]

class App extends Component{
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div width="100%" style={{borderBottom:"1px solid #efefef"}}>
          <Header/>
        </div>

        <Container maxwidth="sm">
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
            boards.map(c => {
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
            })
          }
          </TableBody>
        </Table>
        </Container>

        <div width="100%" style={{ borderTop : '1px solid #efefef'}}>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App);
