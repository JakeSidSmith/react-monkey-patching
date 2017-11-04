import { patch } from './patch';

const llamify = (text) => {
  return text.replace(/\b[a-z]+\b/gi, (match) => {
    if (match.toUpperCase() === match) {
      return 'LLAMA';
    }

    if (match.toLowerCase() === match) {
      return 'llama';
    }

    return 'Llama';
  });
};

patch(llamify);
