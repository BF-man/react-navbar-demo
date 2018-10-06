import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default App;
