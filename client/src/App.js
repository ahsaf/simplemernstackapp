import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Main from './main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Main />
        <h2>made by ahsaf</h2>
      </div>
    );
  }
}

export default App;
