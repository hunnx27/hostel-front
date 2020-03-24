const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/products', (req,res) => {
    res.send([
        {
          "id":1,
          "image": "https://placeimg.com/200/140/1",
          "productNo": "51-4149",
          "region": "연천군",
          "title": "모텔임대합니다. 임대 서울1시간거리",
          "subtitle": "저렴한 투자비@21객실",
          "guaranteePrice": "2000",
          "monthPrice": "200",
          "wishRightPrice": "1800",
          "totalPrice": "3800",
          "realProdChkday": "2019-10-29 14:12",
          "viewCnt": "337",
          "sellerName": "서도인",
          "sellerPhone": "010-1234-1234"
        },
        {
          "id":2,
          "image": "https://placeimg.com/200/140/2",
          "productNo": "51-4149",
          "region": "서울 종로구",
          "title": "종로구 게스트하우스",
          "subtitle": "자리만 마음에 드시면 권리금 협상해드립니다!",
          "guaranteePrice": "2000",
          "monthPrice": "200",
          "wishRightPrice": "1800",
          "totalPrice": "3800",
          "realProdChkday": "2019-10-29 14:12",
          "viewCnt": "238",
          "sellerName": "최민수",
          "sellerPhone": "010-1234-1234"
        },
        {
          "id":3,
          "image": "https://placeimg.com/200/140/3",
          "productNo": "51-4149",
          "region": "인천 미추홀구",
          "title": "유흥가 중심상권 모텔 임대",
          "subtitle": "백악관나이트 한국관나이트등 유흥가 중심상권 모텔",
          "guaranteePrice": "5000",
          "monthPrice": "440",
          "wishRightPrice": "1000",
          "totalPrice": "6000",
          "realProdChkday": "2019-10-29 14:12",
          "viewCnt": "337",
          "sellerName": "김수미",
          "sellerPhone": "010-1234-1234"
        }
      ]);
});

app.listen(port, () => console.log(`listening on port ${port}`));