# 개발 클라이언트 히스토리
## 0. 기타 환경 잡기
`npm install --global yarn`
npm보다 좀더 나음 비슷함 

## 1. create-react-app 생성
`create-react-app hostel-front`
리액트 앱을 생성한다.

## 2. 앱 실행
`yarn start`
서버가 켜짐

## 3. App.js 에서 변경

## 4. git 연결
1. 깃허브에서 레파지토리 생성후 
2. 수정된 파일들 스테이징 올리기, 커밋하기
2. 리모트와 연결
`git remote add origin https://github.com/hunnx27/hostel-front.git`
3. 깃 푸시하기
`git push --set-upstream origin master`

## 10. Material UI 셋팅하기
`npm install @material-ui/core`

## 11. webpack 설치
`npm install --save-dev webpack webpack-dev-server webpack-cli`










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


