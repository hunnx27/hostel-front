# 개발 서버 히스토리
## 1. 기타 환경 잡기
`npm install -g nodemon`
 익스프레스 서버를 실행시켜줄 때 도움을 줌

## 1. 클라이언트 폴더 정리
1. 기존 리액트작업은 client폴더(hostel-front)에 모두 옮겨넣는다
2. .git은 제외
3. client의 .gitignore 복사해서 밖으로 뺌
4. package.json 생성 및 스크립트 코드
    {
        "name": "hostel",
        "version": "1.0.0",
        "scripts": {
            "client": "cd client && yarn start",
            "server": "nodemon server.js",
            "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
        },
        "dependencies" : {
            "body-parser": "^1.18.3",
            "express": "^4.16.4"
        },
        "devDependencies": {
            "concurrently": "^4.0.1"
        }
    }
5. package.json에서 정의한 body-parrser, express 설치
    `npm install`

## 2. express 와 client(hostel-front) 실행
`nodemon server.js`


