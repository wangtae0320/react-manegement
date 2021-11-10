import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customer = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '910320',
    'gender' : '남자'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '영미',
    'birthday' : '921220',
    'gender' : '여자'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '철수',
    'birthday' : '930410',
    'gender' : '남자'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
