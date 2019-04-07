import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import LetterButtonMatrix from './components/LetterButtonMatrix.js'
import Dictionary from './dictionary_2.json'
console.log(Dictionary);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <LetterButtonMatrix
          keyLetter={Dictionary.keyLetter}
          letter={Dictionary.letters.split('')}
        ></LetterButtonMatrix>
      </div>
    );
  }
}

export default App;
