(function () {
  'use strict';

  const log = msg => {
    console.log('=========== info ===========');
    console.log(msg);
    console.log('============================');
  };

  var message = {
    hi: 'hello rollup'
  };

  const msg = message.hi;
  log(msg);

}());
