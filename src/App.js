import React, { Component } from 'react';
import Board from './components/Board'
import './App.css';

const boards = [
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '900207',
  'gender': '남자',
  'job': '대학생'
  },
  {
    'id':2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '최지훈',
    'birthday': '911212',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id':3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김순이',
    'birthday': '970405',
    'gender': '여자',
    'job': '디자이너'
  }
]

class App extends Component{
  render(){
    return (
      <div>
        {
          boards.map(c => {
            return (
              <Board
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
        />
      </div>
    )
  }
}

export default App;
