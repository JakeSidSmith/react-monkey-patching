import React from 'react';

const createElement = React.createElement;

const wordFinder = /\b[a-z]+\b/gi;

const scrambleWord = (word) => {
  if (word.length <= 2) {
    return word;
  }

  const newWord = word.split('');
  const firstLetter = newWord.shift();
  const lastLetter = newWord.pop();

  for (let i = 0; i < word.length; i += 1) {
    const from = Math.floor(Math.random() * word.length);
    const to = Math.floor(Math.random() * word.length);
    newWord.splice(to, 0, newWord.splice(from, 1)[0]);
  }

  newWord.unshift(firstLetter);
  newWord.push(lastLetter);

  return newWord.join('');
};

const scrambleWords = (text) => {
  return text.replace(wordFinder, scrambleWord);
};

React.createElement = function () {
  const args = Array.prototype.slice.call(arguments);

  for (let i = 1; i < args.length; i += 1) {
    const arg = args[i];

    if (typeof arg === 'string') {
      args[i] = scrambleWords(arg);
    }
  }

  if (args[0] === 'input' && args[1] && typeof args[1] === 'object') {
    const arg = args[1];

    if (arg.placeholder) {
      arg.placeholder = scrambleWords(arg.placeholder);
    }

    if (
      (arg.type === 'submit' || arg.type === 'button') &&
      arg.value &&
      typeof arg.value === 'string'
    ) {
      arg.value = scrambleWords(arg.value);
    }
  }

  return createElement.apply(React, args);
};

