import React, { Fragment, Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import UserItem from './Components/Users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment className='App'>
        <Navbar />
        <UserItem />
      </Fragment>
    );
  }
}

export default App;
