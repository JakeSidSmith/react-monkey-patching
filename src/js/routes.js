import Intro from './app/pages/intro';
import MonkeyPatching from './app/pages/monkey-patching';
import ReactCreateElement from './app/pages/react-create-element';
import ReactHighlightUpdates from './app/pages/react-highlight-updates';
import MaterialUI from './app/pages/material-ui';
import ReactFastclick from './app/pages/react-fastclick';
import SimplePatch from './app/pages/simple-patch';
import Llamify from './app/pages/llamify';
import Scramble from './app/pages/scramble';
import Internationalization from './app/pages/internationalization';

export default [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/what-is-monkey-patching/',
    name: 'What is monkey patching?',
    component: MonkeyPatching
  },
  {
    path: '/why-react-create-element/',
    name: 'Why React?',
    component: ReactCreateElement
  },
  {
    path: '/react-highlight-updates/',
    name: 'React highlight updates',
    component: ReactHighlightUpdates
  },
  {
    path: '/material-ui-button-effect/',
    name: 'Material UI button effect',
    component: MaterialUI
  },
  {
    path: '/react-fastclick/',
    name: 'React fastclick',
    component: ReactFastclick
  },
  {
    path: '/simple-patch-function/',
    name: 'Simple patch function',
    component: SimplePatch
  },
  {
    path: '/llamify/',
    name: 'Llamify',
    component: Llamify
  },
  {
    path: '/scramble/',
    name: 'Scramble',
    component: Scramble
  },
  {
    path: '/internationalization/',
    name: 'Internationalization',
    component: Internationalization
  }
];
