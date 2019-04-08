var Buzz = {};

Buzz.dict = require('./dictionary_2.json');
Buzz.letters = Buzz.dict.letters.split('');

// Words found
Buzz.wordsFound = [];
Buzz.getWordsFound = function () {
  return this.wordsFound;
}

// Point System
Buzz.points = 0;
Buzz.getPoints = function () {
  return this.points;
};
Buzz.addPoints = function (x) {
  var len = x.length,
      points;
  if (len >= 7 ) {
    this.points += len;
    points = len;

  } else if (len === 4) {
    this.points += 1;
    points = 1;

  } else if (len > 4) {
    this.points += 1 + (len - 4);
    points = 1 + (len - 4);

  } else {
    throw new Error('Expected value to be >=4 ');
  }
  return points;
};

// Add to Found Words
Buzz.addToWordsFound = function (x) {
  if (Buzz.wordsFound.push(x)) {
    return true;
  } else {
    return false;
  }
};

// Remove from dictionary
Buzz.removeFromDict = function (x) {
  var words = this.dict.words
      var len = this.dict.words.length;
      var i = 0;
  for (i; i < len; i++) {
    if (words[i] === x) {
      this.dict.words.splice(i, 1);
    }
  }
};

// Check for key letter
Buzz.hasKeyLetter = function (x) {
  return x.includes(Buzz.dict.keyLetter);
};

// Check word is in dictionary
Buzz.inDictionary = function (x) {
  var result = false,
      words = Buzz.dict.words,
      len = Buzz.dict.words.length,
      i = 0;
  for (i; i < len; i++) {
    if (words[i] === x) {
      result = true;
      break;
    }
  }
  return result;
};
Buzz.inWordsFound = function (x) {
  var result = false,
      words = Buzz.wordsFound,
      len = Buzz.wordsFound.length,
      i = 0;
  for (i; i < len; i++) {
    if (words[i] === x) {
      result = true;
      break;
    }
  }
  return result;
};

Buzz.init = function (x) {
  if (!x) {
    console.log('Cannot be empty');

  } else if (x.length <= 3) {
    // Word is too short
    console.log('Word is too short');

  } else if (Buzz.hasKeyLetter(x) && Buzz.inDictionary(x)) {
    // Has key letter and is in dictionary
    var points = Buzz.addPoints(x);
    console.log('Points: +' + points);
    console.log('');
    console.log('Score:', Buzz.getPoints());

    if (Buzz.addToWordsFound(x)) {
      Buzz.removeFromDict(x);
      console.log('Found Words:', Buzz.wordsFound);
    }

  } else if (!Buzz.hasKeyLetter(x)) {
    // Doesn't have key letter
    console.log('\n \nMissing key letter.');

  } else if (Buzz.inWordsFound(x)) {
    // Word already found
    console.log('\n \nWord already found');

  } else if (!Buzz.inDictionary(x)) {
    // Not in dictionary
    console.log('\n \nNot in dictionary.');

  } else {
    // Error State
    console.log('There\'s an error.');
  }
};

export default Buzz;
