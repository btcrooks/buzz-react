import React, { Component } from 'react';

const styles = {
  wrapper: {
    width:  '350px',
    height: '50px',
    border: '1px solid black'
  }
}


export default class LetterView extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <p>{this.props.display}</p>
      </div>
    )
  }
}

