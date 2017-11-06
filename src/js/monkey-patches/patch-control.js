import llamify from './llamify';

const subscriptions = [];

export const subscribe = (callback) => {
  if (typeof callback === 'function' && subscriptions.indexOf(callback) < 0) {
    subscriptions.push(callback);
  }

  return () => {
    const index = subscriptions.indexOf(callback);

    if (index >= 0) {
      subscriptions.splice(index, 1);
    }
  };
};

const updateComponents = () => {
  subscriptions.forEach((callback) => {
    callback();
  });
};

const PATCHES = {
  llamify
};

let unpatch;

export const removePatch = () => {
  if (typeof unpatch === 'function') {
    unpatch();
  }

  updateComponents();
};

export const applyPatch = (name) => {
  if (typeof unpatch === 'function') {
    unpatch();
    unpatch = null;
  }

  unpatch = PATCHES[name]();
  updateComponents();
};
