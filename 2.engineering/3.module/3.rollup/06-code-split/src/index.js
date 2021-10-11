// import { log } from './logger';
// import message from './message';

// const msg = message.hi;
// log(msg);

import('./logger').then(({ log }) => {
  log('code split');
})