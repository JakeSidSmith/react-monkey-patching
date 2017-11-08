import { create } from 'random-seed';
import { patch } from './patch';

const wordFinder = /\b[a-z]+\b/gi;

const scrambleWord = (word) => {
  if (word.length <= 3) {
    return word;
  }

  const random = create(word);

  const newWord = word.split('');
  const firstLetter = newWord.shift();
  const lastLetter = newWord.pop();

  for (let i = 0; i < word.length; i += 1) {
    const from = random(word.length);
    const to = random(word.length);
    newWord.splice(to, 0, newWord.splice(from, 1)[0]);
  }

  newWord.unshift(firstLetter);
  newWord.push(lastLetter);

  return newWord.join('');
};

const scrambleWords = (text) => {
  return text.replace(wordFinder, scrambleWord);
};

export default () => patch(scrambleWords);
