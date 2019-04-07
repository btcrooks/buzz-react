import React, { Component } from 'react'
// import { createStore } from 'redux'
// import { connect } from 'react-redux'
import './App.css';
import NavBar from './components/NavBar'
import LetterButtonMatrix from './components/LetterButtonMatrix.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <LetterButtonMatrix></LetterButtonMatrix>
      </div>
    );
  }
}

export default App;
