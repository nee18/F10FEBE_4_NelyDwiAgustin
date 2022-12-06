import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './utils/menu';
import './data/resIDB';

import '../scss/style.scss';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  appBar: document.querySelector('app-bar'),
  content: document.querySelector('#content'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
