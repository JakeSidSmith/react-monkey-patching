import Intro from './app/pages/intro';
import MonkeyPatching from './app/pages/monkey-patching';

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
    component: 'div'
  },
  {
    path: '/react-highlight-updates/',
    name: 'React highlight updates',
    component: 'div'
  },
  {
    path: '/material-ui-button-effect/',
    name: 'Material UI button effect',
    component: 'div'
  },
  {
    path: '/react-fastclick/',
    name: 'React fastclick',
    component: 'div'
  },
  {
    path: '/simple-patch-function/',
    name: 'Simple patch function',
    component: 'div'
  },
  {
    path: '/llamify/',
    name: 'Llamify',
    component: 'div'
  },
  {
    path: '/scramble/',
    name: 'Scramble',
    component: 'div'
  },
  {
    path: '/internationalization/',
    name: 'Internationalization',
    component: 'div'
  }
];
