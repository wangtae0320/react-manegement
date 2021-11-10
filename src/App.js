import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customer = {
  'name' : '김기명',
  'birthday' : '910320'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
      />
    );
  }
}

export default App;
