# 서버 구축
## ec2 구축(express 및 AMI리눅스 셋팅)
1. aws 인스턴스 생성 AMI로 띄움
2. 페어키 다운로드
3. puttygen 키로드 > 키저장
4. putty 키 셋팅 
5. login as : ec2-user
6. `sudo yum install nginx`
7. `sudo service nginx start`
7. `sudo service nginx status`
8. nvm설치
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
9. nvm 셸실행
`{{ ansible_env.HOME }}/.nvm/nvm.sh`
10. 배시프로필에 반영
`source .bash_profile`
11. 노드설치 
`nvm list`
`nvm install lts/erbium`
`nvm deactivate`
`nvm uinstall lts/eribium`

12. 깃설치
`sudo yum install git`
`git init`

13. RDS Instance 생성

## 프론트 셋팅(reactjs)
14. s3 버킷생성

15. 버킷-속성 정적 웹 사이트 호스팅 , index.html, index.html 셋팅]

16. 버킷-권한-모든퍼블릭 엑세스 차단 체크 해제

17. 버킷-권한-버킷정책
정책생성기
-S3 Bucket Policy 선택 
-Principal *
-Actions GetObject 선택
-Amazon Resource Name(ARN) :arn:aws:s3:::hostel-front/*
-Add Statement 클릭
-Generate Policy 클릭
-만들어진 json 복사해서 버킷정책에 복사하고 저장

18. 버킷-개요 reactjs 빌드 후 빌드파일 업로드
- `npm run build`
- /build/* 안의 모든파일만 업로드

19. 버킷-속성-정적 웹 사이트 호스팅 클릭 
-엔드포인트 주소 확인 가능
 



## 링크
npm설치
https://d2fault.github.io/2018/04/30/20180430-install-and-upgrade-nodejs-or-npm/
https://github.com/nvm-sh/nvm#install-script
https://www.youtube.com/watch?v=CK_rsuEH500&t=22s
https://strongstar.tistory.com/28 : AWS AMI에 깃설치, npm설치
https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html : AWS 노드설치
https://youwaytogo.tistory.com/58 : AWS S3 셋팅

