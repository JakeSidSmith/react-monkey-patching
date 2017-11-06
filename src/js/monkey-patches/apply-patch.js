import llamify from './llamify';

const PATCHES = {
  llamify
};

let unpatch;

const applyPatch = (name) => {
  if (typeof unpatch === 'function') {
    unpatch();
    unpatch = null;
  }

  unpatch = PATCHES[name]();
};

export default applyPatch;
