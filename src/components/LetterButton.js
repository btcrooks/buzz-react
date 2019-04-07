import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import primaryLetterButton from '../images/primaryLetterButton.svg';
import secondaryLetterButton from '../images/secondaryLetterButton.svg';


const styles = {
  width: '134px',
  height: '118px'
}


export default class LetterButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this, 'Parameter');
  }

  handleClick = (param, e) => {
    // console.log('Parameter', param);
    // console.log('Event', e);
    // console.log(this.props.letter);
    this.props.callBack(this.props.letter);
  }

  render() {
    if (this.props.type === 'primary') {
      return(
        <input
          type='button'
          value={this.props.letter}
          onClick={this.handleClick}
          style={{
            position: 'absolute',
            top:  `${this.props.top}px`,
            left: `${this.props.left}px`,
            width:  styles.width,
            height: styles.height,
            fontFamily: 'sans-serif',
            color: '#000',
            fontSize: '40px',
            fontWeight: '600',
            textTransform: 'uppercase',
            textAlign: 'center',
            border: 'none',
            outline: '0',
            background: `url(${primaryLetterButton}) center center no-repeat`,
            backgroundSize: 'contain',
            cursor: 'pointer',
          }}
        />
      )

    } else if (this.props.type === 'secondary') {
      return(
        <input
          type='button'
          value={this.props.letter}
          onClick={this.handleClick}
          style={{
            position: 'absolute',
            top:  `${this.props.top}px`,
            left: `${this.props.left}px`,
            width:  styles.width,
            height: styles.height,
            fontFamily: 'sans-serif',
            color: '#000',
            fontSize: '40px',
            fontWeight: '600',
            textTransform: 'uppercase',
            textAlign: 'center',
            border: 'none',
            outline: '0',
            background: `url(${secondaryLetterButton}) center center no-repeat`,
            backgroundSize: 'contain',
            cursor: 'pointer',
          }}
        />
      )
    }
  }
}

