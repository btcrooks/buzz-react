import React, { Component } from 'react';
import LetterButton from './LetterButton'
import LetterView from './LetterView'

const styles = {
  wrapper: {
    position: 'relative',
    width:  '343px',
    height: '357px',
  }
}


export default class LetterButtonMatrix extends Component {
  render() {
    return (
      <div>
        <LetterView></LetterView>
        <div style={ styles.wrapper }>
          <LetterButton type='primary'   letter={ this.props.keyLetter } top='120' left='105'></LetterButton>
          <LetterButton type='secondary' letter={ this.props.letter[0] } top='60' left='0'></LetterButton>
          <LetterButton type='secondary' letter={ this.props.letter[1] } top='0' left='105'></LetterButton>
          <LetterButton type='secondary' letter={ this.props.letter[2] } top='60' left='210'></LetterButton>
          <LetterButton type='secondary' letter={ this.props.letter[3] } top='180' left='0'></LetterButton>
          <LetterButton type='secondary' letter={ this.props.letter[4] } top='240' left='105'></LetterButton>
          <LetterButton type='secondary' letter={ this.props.letter[5] } top='180' left='210'></LetterButton>
        </div>
      </div>
    )
  }
}

