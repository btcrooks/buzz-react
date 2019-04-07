import React, { Component } from 'react';
import LetterButton from './LetterButton'
import LetterView from './LetterView'
import Dictionary from '../dictionary_2.json'

const styles = {
  wrapper: {
    position: 'relative',
    width:  '343px',
    height: '357px',
  }
}

export default class LetterButtonMatrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      activeLetters: [],
      activeWord: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.state.activeLetters.push(e.toUpperCase())
    // console.log(this.state.activeLetters);
    this.setState({ display: this.state.activeLetters });
  }

  myCallBack = (dataFromChild) => {
    // console.log('child data:', dataFromChild);
    this.handleChange(dataFromChild);
  }

  submit = (props) => {
    this.state.activeWord = this.state.activeLetters.join('').toLowerCase();
    console.log(this.state.activeWord);
    if (!this.state.activeWord) {
      console.log('Cant be blank');
    } else if (Dictionary.words.includes(this.state.activeWord)) {
      console.log('Word found!');
    } else {
      console.log('Word not found in dictionary');
    }
    this.clear();
  }

  clear = (props) => {
    this.state.activeLetters = [];
    this.setState({ display: '' });
    console.log('Cleared');
  }

  shuffle = (props) => {
    console.log('shuffled');
  }

  render() {
    return (
      <div>
        <LetterView display={ this.state.display }></LetterView>
        <div style={ styles.wrapper }>
          <LetterButton callBack={this.myCallBack} type='primary'   letter={ Dictionary.keyLetter } top='120' left='105'></LetterButton>
          <LetterButton callBack={this.myCallBack} type='secondary' letter={ Dictionary.letters[0] } top='60' left='0'></LetterButton>
          <LetterButton callBack={this.myCallBack} type='secondary' letter={ Dictionary.letters[1] } top='0' left='105'></LetterButton>
          <LetterButton callBack={this.myCallBack} type='secondary' letter={ Dictionary.letters[2] } top='60' left='210'></LetterButton>
          <LetterButton callBack={this.myCallBack} type='secondary' letter={ Dictionary.letters[3] } top='180' left='0'></LetterButton>
          <LetterButton callBack={this.myCallBack} type='secondary' letter={ Dictionary.letters[4] } top='240' left='105'></LetterButton>
          <LetterButton callBack={this.myCallBack} type='secondary' letter={ Dictionary.letters[5] } top='180' left='210'></LetterButton>
        </div>
        <input type="button" onClick={ this.submit } value="enter" />
        <input type="button" onClick={ this.shuffle } value="Shuffle" />
        <input type="button" onClick={ this.clear } value="clear" />
      </div>
    )
  }
}

